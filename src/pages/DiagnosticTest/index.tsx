import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import Navbar from '../../layouts/Navbar';
import type { TestSection } from "../../types/diagnosticTest";
import { ArrowLeft, LogOut, User } from 'lucide-react';
import type { AppDispatch, RootState } from '../../store';

import DiagnosticHomeScreen from './HomeScreen';
import DiagnosticSectionIntro from "./SectionIntro";
import DiagnosticTestScreen from "./TestScreen";
import { DiagnosticSectionTransition } from './SectionTransition';
import { logout } from '../../store/authSlice';
import { setNumberOfTopics } from '../../store/diagnosticSlice';
import { diagnosticService } from '../../services/diagnosticService';
import { startTest } from '../../services/timerService';


const DiagnosticTest: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);
  const numberRW = useSelector((state: RootState) => state.diagnostic.numberOfRWTopics)
  const numberMath = useSelector((state: RootState) => state.diagnostic.numberOfMathTopics)
  const [currentScreen, setCurrentScreen] = useState<"home" | "rw-intro" | "test" | "transition" | "math-intro" | "results">("home");
  const [currentSection, setCurrentSection] = useState<TestSection>("RW");
  
  useEffect(() => {
    handleGetNumberOfTopics();
  }, []);

  const handleGetNumberOfTopics = async () => {
    try {
      const response = await diagnosticService.getNumberOfTopics();
      dispatch(setNumberOfTopics(response));
    } catch (error) {
      throw error;
    }
  }

  const handleStartTest = () => {
    setCurrentScreen("rw-intro");
    setCurrentSection("RW");
  }

  const handleStartReadingWriting = () => {
    setCurrentScreen("test");
    numberRW && dispatch(startTest({
      section_type: "RW",
      duration_mins: 3 * numberRW
    }));
  }

  const handleStartMath = () => {
    setCurrentSection("Math")
    setCurrentScreen("test");
    setCurrentScreen("test");
    numberMath && dispatch(startTest({
      section_type: "Math",
      duration_mins: 3 * numberMath
    }));
  }

  const handleContinueToMath = () => {
    setCurrentScreen("math-intro");
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className="min-h-screen bg-[#feefad]" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Navigation Bar */}
      <Navbar />

      {/* Header with user info and back button */}
      <header className="bg-white shadow-sm border-b border-sky-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Button
                onClick={() => navigate(-1)}
                variant="ghost"
                size="sm"
                className="text-dark-blue hover:text-sky-blue hover:bg-sky-blue/10 p-2"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portal
              </Button>
              <div className="bg-sky-blue rounded-full p-2">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-dark-blue">{user?.first_name} {user?.last_name}</h1>
                <p className="text-small text-dark-blue opacity-70">
                  Target Score: {user?.target_score}
                </p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Screen Content */}
      {currentScreen === "home" && (
        <DiagnosticHomeScreen onStartTest={handleStartTest} />
      )}

      {currentScreen === "rw-intro" && (
        <DiagnosticSectionIntro
          section={currentSection}
          onStart={handleStartReadingWriting}
        />
      )}

      {currentScreen === "test" && (
        <DiagnosticTestScreen
          currentSection={currentSection}
        />
      )}

      {currentScreen === "math-intro" && (
        <DiagnosticSectionIntro
          section={currentSection}
          onStart={handleStartMath}
        />
      )}

      {currentScreen === "transition" && (
        <DiagnosticSectionTransition onContinue={handleContinueToMath} />
      )}

    </div>
  )
}

export default DiagnosticTest;

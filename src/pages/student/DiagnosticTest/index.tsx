import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Navbar from "../../../layouts/Navbar";
import Header from "../../../layouts/Header";

import DiagnosticHomeScreen from './HomeScreen';
import DiagnosticSectionIntro from "./SectionIntro";
import DiagnosticTestScreen from "./TestScreen";
import { DiagnosticSectionTransition } from './SectionTransition';
import type { TestSection, Topic } from "../../../types/diagnostic";
import type { AppDispatch, RootState } from '../../../store';
import { setTopics } from '../../../store/diagnosticSlice';
import { diagnosticService } from '../../../services/diagnosticService';
import { startTest } from '../../../services/timerService';


const DiagnosticTest: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const topics = useSelector((state: RootState) => state.diagnostic.topics);
  const [currentScreen, setCurrentScreen] = useState<"home" | "rw-intro" | "test" | "transition" | "math-intro" | "results">("home");
  const [currentSection, setCurrentSection] = useState<TestSection>("RW");
  const numberRW = useMemo(() => {
    return topics && topics.filter((t: Topic) => t.section === "RW").length
  }, [topics]);
  const numberMath = useMemo(() => {
    return topics && topics.filter((t: Topic) => t.section === "Math").length
  }, [topics]);
  
  useEffect(() => {
    getTopics();
  }, []);

  const getTopics = async () => {
    try {
      const response = await diagnosticService.getTopics();
      dispatch(setTopics(response));
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

  return (
    <div className="min-h-screen bg-[#feefad]" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar />
      <Header />
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

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import Navbar from '../../layouts/Navbar';
import type { TestSection, TestProgress } from "../../types/diagnosticTest";
import { ArrowLeft, LogOut, User } from 'lucide-react';
import {
  getCurrentQuestion,
  getProgress,
  canGoBack as canNavigateBack,
  handleRWNavigation,
  handleMathNavigation,
  handleRWPrevious,
  handleMathPrevious,
  isAnswerCorrect
} from '../../utils/navigationLogic';
import type { RootState } from '../../store';

import { DiagnosticHomeScreen } from './HomeScreen';
import { DiagnosticSectionIntro } from './SectionIntro';
import { DiagnosticTestScreen } from './TestScreen';
import { DiagnosticResultsScreen } from './ResultsScreen';
import { DiagnosticSectionTransition } from './SectionTransition';
import { logout } from '../../store/authSlice';


const DiagnosticTest: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const [currentScreen, setCurrentScreen] = useState<"home" | "rw-intro" | "test" | "transition" | "math-intro" | "results">("home");
  const [currentSection, setCurrentSection] = useState<TestSection>("reading-writing");
  const [timeRemaining, setTimeRemaining] = useState(32 * 60);
  const [rwProgress, setRwProgress] = useState<TestProgress>({
    questionTypeIndex: 0,
    currentDifficulty: "medium",
    hasAnsweredMedium: false,
  });

  // Math adaptive progress
  const [mathProgress, setMathProgress] = useState<TestProgress>({
    questionTypeIndex: 0,
    currentDifficulty: "medium",
    hasAnsweredMedium: false,
  });
  const [answers, setAnswers] = useState<{[key: string]: number}>({});
  const currentQuestion = getCurrentQuestion(currentSection, rwProgress, mathProgress)

  // Timer effect with automatic progression
  useEffect(() => {
    if (currentScreen === "test" && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (currentScreen === "test" && timeRemaining === 0) {
      // Time ran out
      if (currentSection === "reading-writing") {
        setCurrentScreen("transition")
      } else if (currentSection === "math") {
        setCurrentScreen("results")
      }
    }
  }, [currentScreen, timeRemaining, currentSection]);

  const handleStartTest = () => {
    setCurrentScreen("rw-intro")
    setCurrentSection("reading-writing")
    setTimeRemaining(32 * 60)
    setRwProgress({
      questionTypeIndex: 0,
      currentDifficulty: "medium",
      hasAnsweredMedium: false,
    })
    setAnswers({})
  }

  const handleStartReadingWriting = () => {
    setCurrentScreen("test")
  }

  const handleStartMath = () => {
    setCurrentSection("math")
    setTimeRemaining(55 * 60)
    setMathProgress({
      questionTypeIndex: 0,
      currentDifficulty: "medium",
      hasAnsweredMedium: false,
    })
    setCurrentScreen("test")
  }

  const handleContinueToMath = () => {
    setCurrentScreen("math-intro")
  }

  const handleAnswer = (answerIndex: number) => {
    if (currentQuestion) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: answerIndex,
      }))
    }
  }

  const handleNext = () => {
    if (!currentQuestion) return

    const selectedAnswer = answers[currentQuestion.id]
    const isCorrect = isAnswerCorrect(currentQuestion, selectedAnswer)
    
    if (currentSection === "reading-writing") {
      handleRWNavigation(
        rwProgress,
        isCorrect,
        setRwProgress,
        setCurrentScreen,
        setTimeRemaining,
        setCurrentSection,
        setMathProgress,
        selectedAnswer
      )
    } else if (currentSection === "math") {
      handleMathNavigation(
        mathProgress,
        isCorrect,
        setMathProgress,
        setCurrentScreen,
        selectedAnswer
      )
    }
  }

  const handlePrevious = () => {
    if (currentSection === "reading-writing") {
      handleRWPrevious(rwProgress, setRwProgress)
    } else if (currentSection === "math") {
      handleMathPrevious(
        mathProgress,
        setMathProgress,
        setCurrentSection,
        setTimeRemaining,
        setRwProgress
      )
    }
  }

  const canGoBack = () => {
    return canNavigateBack(currentSection, rwProgress, mathProgress)
  }

  // Get progress using navigation logic
  const progress = getProgress(currentSection, rwProgress, mathProgress)

  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : undefined
  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "Poppins, sans-serif", backgroundColor: '#feefad' }}>
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
          section="reading-writing"
          onStart={handleStartReadingWriting}
        />
      )}

      {currentScreen === "test" && (
        <DiagnosticTestScreen
          currentQuestion={currentQuestion}
          currentSection={currentSection}
          timeRemaining={timeRemaining}
          progress={progress}
          selectedAnswer={selectedAnswer}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrevious={handlePrevious}
          canGoBack={canGoBack()}
        />
      )}

      {currentScreen === "math-intro" && (
        <DiagnosticSectionIntro
          section="math"
          onStart={handleStartMath}
        />
      )}

      {currentScreen === "transition" && (
        <DiagnosticSectionTransition onContinue={handleContinueToMath} />
      )}

      {currentScreen === "results" && (
        <DiagnosticResultsScreen answers={answers} />
      )}
    </div>
  )
}

export default DiagnosticTest;

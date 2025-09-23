import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../store';
import { endTest, fetchRemaining } from '../../../services/timerService';
import { setRemaining } from '../../../store/timerSlice';
import { setQuestion } from '../../../store/diagnosticSlice';
import { diagnosticService } from '../../../services/diagnosticService';
import type { DifficultyLevel, TestSection, Topic } from '../../../types/diagnostic';

import { Button } from '../../../components/Button';
import { Progress } from '../../../components/Progress';
import { Badge } from '../../../components/Badge';
import { Alert, AlertDescription } from '../../../components/Alert';
import { Calculator } from './Calculator';
import { Clock, ArrowRight, AlertTriangle, CheckCircle, Calculator as CalculatorIcon } from 'lucide-react'
import QuestionDisplay from './QuestionDisplay';
import { formatTime, formatSectionName, formatQuestionNumber } from '../../../utils/formatters'

interface DiagnosticTestScreenProps {
  currentSection: TestSection
}

const DiagnosticTestScreen = ({ currentSection }: DiagnosticTestScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { remaining, endTime, isRunning } = useSelector((state: RootState) => state.timer);
  const { topics, question } = useSelector((state: RootState) => state.diagnostic);
  const [ questionIndex, setQuestionIndex ] = useState<number>(0);
  const [ selectedAnswer, setSelectedAnswer ] = useState<number | null>(null);
  const [ timeSec, setTimeSec ] = useState<number>(0);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [calculatorType, setCalculatorType] = useState<"scientific" | "graphing">("scientific");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isLowTime = remaining > 60 && remaining < 300 // 5 minutes
  const isCriticalTime = remaining > 0 && remaining < 60 // 1 minute

  const topicLength = useMemo(() => {
    return topics && topics.filter((t: Topic) => t.section === currentSection).length
  }, [topics, currentSection]);

  const selectedTopic = useMemo(() => {
    if (!topics) return null;
    const sectionTopics = topics.filter((t: Topic) => t.section === currentSection);
    return sectionTopics[Math.floor(questionIndex / 2)];
  }, [topics, currentSection, questionIndex]);

  const handleGetQuestion = useCallback(async (next_id: string, topic_id: string, answer_index: number, time_sec: number, level: DifficultyLevel) => {
    setIsLoading(true);
    const res = await diagnosticService.getQuestion({
      next_topic_id: next_id,
      current_topic_id: topic_id, 
      answer_index: answer_index,
      time_sec: time_sec,
      difficulty: level
    });
    dispatch(setQuestion(res));
    setIsLoading(false);
  }, [dispatch]);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  }

  const handleNext = async () => {
    if (!question || !selectedTopic || selectedAnswer ===  null || !topics) return;
    let nextId = selectedTopic.id;
    setQuestionIndex(prev => prev + 1);
    if(question.difficulty !== "medium") {
      const sectionTopics = topics.filter((t: Topic) => t.section === currentSection);
      let nextTopic = null;
      const topicIndex = Math.floor(questionIndex / 2) + 1
      if(sectionTopics.length === topicIndex) {
        nextTopic = sectionTopics.at(sectionTopics.length - 1);
      } else {
        nextTopic = sectionTopics.at(topicIndex);
      }
      if (!nextTopic) return;
      nextId = nextTopic.id;
    }
    await handleGetQuestion(nextId, selectedTopic.id, selectedAnswer, timeSec, question.difficulty);
    setTimeSec(0);
    setSelectedAnswer(null);
  }

  const enterFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen().catch(err => {
        console.log('Fullscreen error:', err);
      });
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => {
        console.log("Exit fullscreen error:", err);
      });
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'F11') {
      e.preventDefault();
      if (!document.fullscreenElement) {
        enterFullScreen();
      } else {
        exitFullScreen();
      }
    }
  };

  useEffect(() => {
    enterFullScreen();
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      exitFullScreen();
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isRunning && endTime) {
      interval = setInterval(() => {
        const now = Date.now();
        const remainingSec = Math.floor((endTime - now) / 1000);
        dispatch(setRemaining(Math.max(remainingSec, 0)));
        setTimeSec(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, endTime, dispatch]);
  
  useEffect(() => {
    dispatch(fetchRemaining());
  }, [dispatch]);
  
  useEffect(() => {
    if (selectedTopic && questionIndex === 0) {
      handleGetQuestion(selectedTopic.id, selectedTopic.id, -1, 0, "medium");
    }
  }, [selectedTopic, questionIndex, handleGetQuestion]);

  useEffect(() => {
    if(topicLength) {
      if (questionIndex === topicLength * 2) {
        dispatch(endTest());
      }
    }
  }, [questionIndex, dispatch, topicLength]);

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#feefad' }}>
        <div className="text-center">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-sky-blue to-light-blue flex items-center justify-center mb-4 mx-auto animate-pulse">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-dark-blue mb-2">Loading Question...</h2>
          <p className="text-dark-blue opacity-60">Please wait while we prepare your next question</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#feefad' }}>
      {isCriticalTime && (
        <Alert className="border-red-200 bg-red-100 mx-4 mt-4 mb-0">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="ml-2 text-red-800">
            <strong>Critical:</strong> Less than 1 minute remaining! 
          </AlertDescription>
        </Alert>
      )}
      <div className="bg-white border-b border-sky-blue/10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-6">
              <h1 className="text-dark-blue text-2xl font-bold">
                SAT Diagnostic Test
              </h1>
              <Badge 
                variant="secondary" 
                className="px-4 py-2 text-dark-blue border-0"
                style={{ backgroundColor: currentSection === 'RW' ? '#feefad' : '#feefad' }}
              >
                {formatSectionName(currentSection)}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Timer Display */}
              <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                isCriticalTime 
                  ? 'bg-red-100 border border-red-200' 
                  : isLowTime 
                    ? 'bg-orange-50 border border-orange-200'
                    : 'bg-sky-blue/5 border border-sky-blue/20'
              }`}>
                <Clock className={`w-5 h-5 ${
                  isCriticalTime 
                    ? 'text-red-600' 
                    : isLowTime 
                      ? 'text-orange-600'
                      : 'text-sky-blue'
                }`} />
                <span 
                  className={`font-mono font-medium ${
                    isCriticalTime 
                      ? 'text-red-800' 
                      : isLowTime 
                        ? 'text-orange-800'
                        : 'text-dark-blue'
                  }`}
                >
                  {formatTime(remaining)}
                </span>
              </div>

              {/* Progress Counter */}
              <Badge variant="outline" className="border-sky-blue text-sky-blue px-3 py-2">
                <span className="font-medium">
                  {topicLength && formatQuestionNumber(questionIndex + 1, 2 * topicLength)}
                </span>
              </Badge>
            </div>
          </div>

          {/* Progress Bar Section */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-small text-dark-blue opacity-70">
                Section Progress
              </span>
              <span className="text-small text-dark-blue font-medium">
                {topicLength && Math.round((questionIndex / (topicLength * 2)) * 100)}% Complete
              </span>
            </div>
            <Progress 
              value={topicLength && (questionIndex / (topicLength * 2)) * 100} 
              className="h-3 bg-light-blue/20"
            />
          </div>
        </div>
      </div>
      {isLowTime && !isCriticalTime && (
        <Alert className="border-orange-200 bg-orange-50 mx-4 mt-4 mb-0">
          <Clock className="h-4 w-4 text-orange-600" />
          <AlertDescription className="ml-2 text-orange-800">
            <strong>Time Warning:</strong> Less than 5 minutes remaining in this section.
          </AlertDescription>
        </Alert>
      )}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
        {selectedTopic && <QuestionDisplay
          question={question}
          onAnswer={handleAnswer}
          topic={selectedTopic}
          selectedAnswer={selectedAnswer}
        />}
        <div className="mt-4 space-y-1">
          <div className="text-center">
            {selectedAnswer !== null ? (
              <div className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                <CheckCircle className="w-4 h-4" />
                <span className="text-small font-medium">Answer Selected</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 text-dark-blue opacity-60 px-4 py-2">
                <span className="text-small">Select an answer to continue</span>
              </div>
            )}
          </div>
          <div className="flex justify-end items-center">
            <Button
              onClick={handleNext}
              disabled={selectedAnswer === null || isLoading}
              size="lg"
              className={`flex items-center gap-3 shadow-lg transform transition-all duration-200 ${
                selectedAnswer !== null 
                  ? 'bg-sky-blue text-white hover:bg-sky-blue/90 hover:scale-105' 
                  : 'bg-gray-400 text-white cursor-not-allowed'
              }`}
              style={{ height: '56px' }}
            >
              <span className="font-medium text-large">{topicLength && questionIndex === topicLength * 2 -1 ? "Finish" : "Next Question"}</span>
              {topicLength && questionIndex < topicLength * 2 - 1 && <ArrowRight className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Calculator */}
      <div className='fixed bottom-4 right-4 flex flex-col gap-2'>
      {currentSection === "Math" && (
        <>
          <Button
            variant="secondary"
            className="bg-white shadow-lg"
            onClick={() => {
              setCalculatorType("scientific");
              setIsCalculatorOpen(true);
            }}
          >
            <CalculatorIcon className="w-4 h-4 mr-2" />
            Scientific
          </Button>
          <Button
            variant="secondary"
            className="bg-white shadow-lg"
            onClick={() => {
              setCalculatorType("graphing");
              setIsCalculatorOpen(true);
            }}
          >
            <CalculatorIcon className="w-4 h-4 mr-2" />
            Graphing
          </Button>
          <Calculator 
            isOpen={isCalculatorOpen}
            onClose={() => setIsCalculatorOpen(false)}
            type={calculatorType}
          />
        </>
          )}
      </div>
    </div>
  )
}

export default DiagnosticTestScreen;
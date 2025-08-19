import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
import { startTest, fetchRemaining } from '../../services/timerService';
import { setRemaining } from '../../store/timerSlice';

import { Button } from '../../components/Button';
import { Progress } from '../../components/Progress';
import { Badge } from '../../components/Badge';
import { Alert, AlertDescription } from '../../components/Alert';
import { Clock, ChevronLeft, ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react'
import { QuestionDisplay } from './QuestionDisplay';
import type { AdaptiveQuestion, TestSection } from '../../types/diagnosticTest';
import { formatTime, formatSectionName, formatQuestionNumber } from '../../utils/formatters'

interface DiagnosticTestScreenProps {
  currentSection: TestSection
}

const DiagnosticTestScreen = ({ currentSection }: DiagnosticTestScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { remaining, endTime, isRunning } = useSelector((state: RootState) => state.timer);
  // Timer alert states
  const isLowTime = remaining < 300 // 5 minutes
  const isCriticalTime = remaining < 60 // 1 minute

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isRunning && endTime) {
      interval = setInterval(() => {
        const now = Date.now();
        const remainingSec = Math.floor((endTime - now) / 1000);
        dispatch(setRemaining(Math.max(remainingSec, 0)));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, endTime, dispatch]);

  useEffect(() => {
    dispatch(fetchRemaining());
  }, [dispatch])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#feefad' }}>
      {/* Critical Time Alert */}
      {isCriticalTime && (
        <Alert className="border-red-200 bg-red-100 mx-4 mt-4 mb-0">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="ml-2 text-red-800">
            <strong>Critical:</strong> Less than 1 minute remaining! 
          </AlertDescription>
        </Alert>
      )}

      {/* Header */}
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
                  {formatQuestionNumber(1, 28)}
                </span>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Low Time Warning */}
      {isLowTime && !isCriticalTime && (
        <Alert className="border-orange-200 bg-orange-50 mx-4 mt-4 mb-0">
          <Clock className="h-4 w-4 text-orange-600" />
          <AlertDescription className="ml-2 text-orange-800">
            <strong>Time Warning:</strong> Less than 5 minutes remaining in this section.
          </AlertDescription>
        </Alert>
      )}

      {/* Question Content */}
    </div>
  )
}

export default DiagnosticTestScreen;
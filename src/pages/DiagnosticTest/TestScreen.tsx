import { Button } from '../../components/Button';
import { Progress } from '../../components/Progress';
import { Badge } from '../../components/Badge';
import { Alert, AlertDescription } from '../../components/Alert';
import { Clock, ChevronLeft, ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react'
import { QuestionDisplay } from './QuestionDisplay';
import type { AdaptiveQuestion, TestSection } from '../../types/diagnosticTest';
import { formatTime, formatSectionName, formatQuestionNumber } from '../../utils/formatters'

interface DiagnosticTestScreenProps {
  currentQuestion: AdaptiveQuestion | null
  currentSection: TestSection
  timeRemaining: number
  progress: {
    current: number
    total: number
    percentage?: number
  }
  selectedAnswer?: number
  onAnswer: (answerIndex: number) => void
  onNext: () => void
  onPrevious: () => void
  canGoBack: boolean
}

export function DiagnosticTestScreen({
  currentQuestion,
  currentSection,
  timeRemaining,
  progress,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrevious,
  canGoBack
}: DiagnosticTestScreenProps) {
  if (!currentQuestion) {
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

  // Timer alert states
  const isLowTime = timeRemaining < 300 // 5 minutes
  const isCriticalTime = timeRemaining < 60 // 1 minute

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
                style={{ backgroundColor: currentSection === 'reading-writing' ? '#feefad' : '#feefad' }}
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
                  {formatTime(timeRemaining)}
                </span>
              </div>

              {/* Progress Counter */}
              <Badge variant="outline" className="border-sky-blue text-sky-blue px-3 py-2">
                <span className="font-medium">
                  {formatQuestionNumber(progress.current, progress.total)}
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
                {Math.round((progress.current / progress.total) * 100)}% Complete
              </span>
            </div>
            <Progress 
              value={(progress.current / progress.total) * 100} 
              className="h-3 bg-light-blue/20"
            />
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
        <QuestionDisplay
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onAnswer={onAnswer}
        />

        {/* Navigation Section */}
        <div className="mt-16 space-y-6">
          {/* Answer Status */}
          <div className="text-center">
            {selectedAnswer !== undefined ? (
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

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <Button
              onClick={onPrevious}
              disabled={!canGoBack}
              variant="outline"
              size="lg"
              className={`flex items-center gap-3 ${
                canGoBack 
                  ? 'border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white' 
                  : 'border-gray-300 text-gray-400 cursor-not-allowed'
              }`}
              style={{ height: '48px' }}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Previous</span>
            </Button>

            <div className="flex items-center gap-4">
              {/* Section Indicator */}
              <div className="hidden sm:flex items-center gap-2 text-small text-dark-blue opacity-70">
                <span>Question {progress.current} of {progress.total}</span>
                <span>•</span>
                <span>{formatSectionName(currentSection)} Section</span>
              </div>
            </div>

            <Button
              onClick={onNext}
              disabled={selectedAnswer === undefined}
              size="lg"
              className={`flex items-center gap-3 shadow-lg transform transition-all duration-200 ${
                selectedAnswer !== undefined 
                  ? 'bg-sky-blue text-white hover:bg-sky-blue/90 hover:scale-105' 
                  : 'bg-gray-400 text-white cursor-not-allowed'
              }`}
              style={{ height: '56px' }}
            >
              <span className="font-medium text-large">Next Question</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card';
import { Badge } from '../../../components/Badge';
import { Progress } from '../../../components/Progress';
import { Calculator, ArrowRight, CheckCircle, Clock } from 'lucide-react'

interface DiagnosticSectionTransitionProps {
  onContinue: () => void
  autoTransitionDelay?: number
}

export function DiagnosticSectionTransition({ 
  onContinue, 
  autoTransitionDelay = 5000 
}: DiagnosticSectionTransitionProps) {
  const [countdown, setCountdown] = useState(Math.floor(autoTransitionDelay / 1000))
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      onContinue()
    }, autoTransitionDelay)

    // Update countdown every second
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Update progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const increment = 100 / (autoTransitionDelay / 100)
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + increment
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(countdownInterval)
      clearInterval(progressInterval)
    }
  }, [onContinue, autoTransitionDelay])

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#feefad' }}>
      <Card className="w-full max-w-lg mx-4 text-center border-0 shadow-2xl bg-white">
        <CardHeader className="pb-6">
          {/* Success Icon */}
          <div className="w-24 h-24 rounded-lg flex items-center justify-center mb-8 mx-auto shadow-xl bg-gradient-to-br from-sunshine-yellow to-light-yellow animate-in zoom-in-95">
            <CheckCircle className="w-12 h-12 text-dark-blue" />
          </div>
          
          {/* Completion Message */}
          <CardTitle className="text-dark-blue mb-4">
            Section Complete!
          </CardTitle>
          
          {/* Completion Badge */}
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 px-4 py-2 mb-4">
            ✓ Reading & Writing Section Finished
          </Badge>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Completion Message */}
          <div className="space-y-3">
            <p className="text-large text-dark-blue">
              Excellent work! You've successfully completed the Reading & Writing section.
            </p>
            <p className="text-dark-blue opacity-70">
              Your responses have been saved and will be included in your comprehensive diagnostic report.
            </p>
          </div>

          {/* Section Transition Indicator */}
          <Card className="bg-light-blue/20 border border-sky-blue/30 p-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sunshine-yellow to-light-yellow flex items-center justify-center shadow-lg">
                <Calculator className="w-6 h-6 text-dark-blue" />
              </div>
              <ArrowRight className="w-5 h-5 text-sky-blue animate-pulse" />
              <div className="text-sky-blue font-medium">Math Section</div>
            </div>
            
            <p className="text-small text-dark-blue opacity-80 mb-4">
              Get ready for the Math section with 38 questions covering algebra, geometry, and more.
            </p>

            {/* Countdown and Progress */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-sky-blue">
                <Clock className="w-4 h-4" />
                <span className="text-small font-medium">
                  Starting in {countdown} second{countdown !== 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="space-y-2">
                <Progress 
                  value={progress} 
                  className="h-2"
                  style={{
                    background: 'rgba(178, 218, 251, 0.2)'
                  }}
                />
                <div className="text-small text-dark-blue opacity-60">
                  Preparing your Math section...
                </div>
              </div>
            </div>
          </Card>

          {/* Motivational Message */}
          <div className="bg-light-yellow/20 border border-sunshine-yellow/30 rounded-lg p-4">
            <h4 className="text-dark-blue font-medium mb-2">Keep Up the Great Work!</h4>
            <p className="text-small text-dark-blue opacity-80">
              You're halfway through your diagnostic test. The Math section will help us understand 
              your quantitative reasoning skills and identify areas for improvement.
            </p>
          </div>

          {/* Quick Reminder */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-small text-dark-blue opacity-70 bg-sky-blue/5 px-4 py-2 rounded-lg">
              <span>💡</span>
              <span>Remember: You can use a calculator for the Math section</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
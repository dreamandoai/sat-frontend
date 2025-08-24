import { useMemo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { Button } from "../../../components/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/Card";
import { Badge } from "../../../components/Badge";
import { Award, Users, Calendar, CheckCircle, BookOpen } from 'lucide-react'

const DiagnosticResultsScreen: React.FC = () => {
  const topics = useSelector((state: RootState) => state.diagnostic.topics);
  
  const totalQuestions = useMemo(() => {
    return topics && 2 * topics.length;
  }, [topics]);
  
  const openCalendlyInNewTab = () => {
    window.open('https://calendly.com/ciro-formisano-dreamando', '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-6 mx-auto shadow-lg bg-gradient-to-br from-sunshine-yellow to-light-yellow">
            <Award className="w-10 h-10 text-dark-blue" />
          </div>
          <h1 className="mb-4 text-dark-blue text-5xl font-extrabold">
            Test Complete!
          </h1>
          <div className="flex justify-center items-center gap-4 mb-6">
            <Badge variant="secondary" className="bg-light-yellow text-dark-blue border-0 px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              100% Complete
            </Badge>
            <Badge variant="outline" className="border-sky-blue text-sky-blue px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              {totalQuestions} Questions Answered
            </Badge>
          </div>
          <p className="text-large text-dark-blue opacity-80 max-w-2xl mx-auto">
            Congratulations on completing your SAT diagnostic test! Your personalized results analysis is being prepared.
          </p>
        </div>
        
        {/* Consultation Booking */}
        <Card className="border-0 shadow-xl bg-light-blue">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg bg-dark-blue">
              <Users className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-dark-blue">
              Ready to Improve Your Score?
            </CardTitle>
            <CardDescription className="text-dark-blue">
              Schedule a free consultation with our SAT experts to find out about your result, create a personalized study plan, and maximize your potential.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              onClick={openCalendlyInNewTab}
              size="lg"
              className="shadow-xl transform hover:scale-105 transition-all duration-200 mb-4 bg-sunshine-yellow text-dark-blue hover:bg-sunshine-yellow/90 border-0"
              style={{ height: '48px' }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              <span className="text-large">Book a Free Consultation</span>
            </Button>
            <p className="text-small text-dark-blue opacity-80">
              30-minute session • Expert guidance • Personalized recommendations
            </p>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-light-yellow/30 border border-sunshine-yellow/50 rounded-lg p-6">
            <h4 className="text-dark-blue mb-2">Your Journey Continues</h4>
            <p className="text-small text-dark-blue opacity-80 max-w-2xl mx-auto">
              This diagnostic test is the first step towards achieving your target SAT score. 
              Our team will provide detailed insights into your strengths and areas for improvement, 
              along with a customized study plan tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiagnosticResultsScreen;
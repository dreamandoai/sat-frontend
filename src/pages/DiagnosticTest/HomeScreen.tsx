import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

import { Button } from '../../components/Button';
import { Card, CardDescription, CardHeader, CardTitle } from '../../components/Card';
import { Clock, BookOpen, Calculator, Award, ChevronRight, Brain, Users, GraduationCap } from 'lucide-react'
import { useMemo } from 'react';
import type { Topic } from '../../types/diagnostic';

interface DiagnosticHomeScreenProps {
  onStartTest: () => void
}

const DiagnosticHomeScreen = ({ onStartTest }: DiagnosticHomeScreenProps) => {
  const topics = useSelector((state: RootState) => state.diagnostic.topics);
  const rwTopics = useMemo(() => {
    return topics && topics.filter((t: Topic) => t.section === "RW");
  }, [topics]);
  const mathTopics = useMemo(() => {
    return topics && topics.filter((t: Topic) => t.section === "Math");
  }, [topics]);

  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20">
          <h1 className="mb-6 leading-tight text-dark-blue text-5xl font-extrabold">
            SAT Diagnostic Test
          </h1>
          <p className="text-center mb-8 max-w-2xl mx-auto text-large text-dark-blue">
            Take our comprehensive SAT diagnostic test to identify your strengths and areas for improvement. 
            Based on your performance, you will be asked questions at the Easy, Medium, and Hard levels to provide 
            an accurate assessment of your current skill level.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-12 mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-light-blue">
                <Clock className="w-6 h-6 text-sky-blue" />
              </div>
              <div className="text-left">
                <div className="font-medium text-dark-blue">
                  {topics && 3 * topics.length} minutes
                </div>
                <div className="text-small text-sky-blue">
                  Complete Assessment
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-light-yellow">
                <GraduationCap className="w-6 h-6 text-sunshine-yellow" />
              </div>
              <div className="text-left">
                <div className="font-medium text-dark-blue">
                  {topics && 2 * topics.length} Questions
                </div>
                <div className="text-small text-sky-blue">
                  Two Main Sections
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-light-blue">
                <Award className="w-6 h-6 text-sky-blue" />
              </div>
              <div className="text-left">
                <div className="font-medium text-dark-blue">
                  Instant Results
                </div>
                <div className="text-small text-sky-blue">
                  Comprehensive Analysis
                </div>
              </div>
            </div>
          </div>

          <Button 
            onClick={onStartTest}
            size="lg" 
            className="shadow-xl transform hover:scale-105 transition-all duration-200 bg-sunshine-yellow text-dark-blue hover:bg-sunshine-yellow/90 border-0"
            style={{ height: '48px' }}
          >
            <span className="text-large">Start Your SAT Diagnostic</span>
            <ChevronRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </div>

      {/* Full-Width Blue Section - Test Sections Overview */}
      <div className="w-full bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto shadow-lg bg-gradient-to-br from-sky-blue to-light-blue">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-dark-blue">
                  Reading and Writing
                </CardTitle>
                <div className="text-2xl font-bold mb-2 text-sky-blue">
                  {rwTopics && rwTopics.length * 2} Questions
                </div>
                <CardDescription className="text-dark-blue">
                  {rwTopics && rwTopics.length} Question types: Adaptive difficulty (Medium → Hard/Easy) for comprehensive assessment across all SAT reading and writing skills.
                </CardDescription>
                <div className="mt-4 p-3 rounded-lg bg-sky-blue">
                  <span className="font-medium text-white">
                    ⏱ {rwTopics && rwTopics.length * 3} minutes
                  </span>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto shadow-lg bg-gradient-to-br from-sunshine-yellow to-light-yellow">
                  <Calculator className="w-8 h-8 text-dark-blue" />
                </div>
                <CardTitle className="text-dark-blue">
                  Math
                </CardTitle>
                <div className="text-2xl font-bold mb-2 text-sky-blue">
                  {mathTopics && mathTopics.length * 2} Questions
                </div>
                <CardDescription className="text-dark-blue">
                  {mathTopics && mathTopics.length} Question types: Demonstrate your mathematical reasoning and problem-solving abilities across algebra, geometry, and data analysis.
                </CardDescription>
                <div className="mt-4 p-3 rounded-lg bg-sky-blue">
                  <span className="font-medium text-white">
                    ⏱ {mathTopics && mathTopics.length * 3} minutes
                  </span>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* Full-Width Yellow Section - Features */}
      <div className="w-full bg-light-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto shadow-lg bg-dark-blue">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <CardTitle className="text-dark-blue">
                  Tailor-made Classes
                </CardTitle>
                <CardDescription className="text-dark-blue">
                  Receive a free consultation to get a tailor-made class program and offers to maximize your score!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto shadow-lg bg-sky-blue">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-dark-blue">
                  Adaptive Question Generation
                </CardTitle>
                <CardDescription className="text-dark-blue">
                  For each medium question, based on your answer, receive an Easy or Hard question to determine your full level, weaknesses and strengths.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto shadow-lg bg-sunshine-yellow">
                  <Users className="w-8 h-8 text-dark-blue" />
                </div>
                <CardTitle className="text-dark-blue">
                  Expert Analysis
                </CardTitle>
                <CardDescription className="text-dark-blue">
                  Get detailed feedback on your performance with personalized recommendations from our SAT experts.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiagnosticHomeScreen;
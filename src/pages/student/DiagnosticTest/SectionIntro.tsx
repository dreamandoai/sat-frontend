import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';

import { Button } from '../../../components/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/Card';
import { Badge } from '../../../components/Badge';
import { BookOpen, Calculator, ExternalLink, Clock, HelpCircle, ChevronRight } from 'lucide-react'
import type { TestSection, Topic } from '../../../types/diagnostic'
import { useMemo } from 'react';

interface DiagnosticSectionIntroProps {
  section: TestSection
  onStart: () => void
}

const DiagnosticSectionIntro = ({ section, onStart }: DiagnosticSectionIntroProps) => {
  const isReadingWriting = section === 'RW'
  const topics = useSelector((state: RootState) => state.diagnostic.topics);
  const numberRW = useMemo(() => {
    return topics && topics.filter((t: Topic) => t.section === "RW").length
  }, [topics]);
  const numberMath = useMemo(() => {
    return topics && topics.filter((t: Topic) => t.section === "Math").length
  }, [topics]);
  
  const sectionData = {
    'RW': {
      skills: [
        'Reading comprehension and analysis',
        'Grammar and language conventions',
        'Vocabulary in context',
        'Writing and revision strategies'
      ]
    },
    'Math': {
      skills: [
        'Algebra and linear equations',
        'Geometry and trigonometry',
        'Statistics and data analysis',
        'Advanced mathematical concepts'
      ]
    }
  }

  const currentSection = sectionData[section]
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#feefad' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Card className="border-0 shadow-2xl bg-white">
            <CardHeader className="text-center pb-8">
              {/* Section Icon */}
              <div className={`w-24 h-24 rounded-lg flex items-center justify-center mb-8 mx-auto shadow-xl ${
                isReadingWriting 
                  ? 'bg-gradient-to-br from-sky-blue to-light-blue' 
                  : 'bg-gradient-to-br from-sunshine-yellow to-light-yellow'
              }`}>
                {isReadingWriting ? (
                  <BookOpen className="w-12 h-12 text-white" />
                ) : (
                  <Calculator className="w-12 h-12 text-dark-blue" />
                )}
              </div>
              
              {/* Section Title */}
              <CardTitle className="text-dark-blue mb-6">
                {isReadingWriting ? "Reading and Writing Section" : "Math Section"}
              </CardTitle>
              
              {/* Section Stats */}
              <div className="flex justify-center items-center gap-6 mb-6">
                <Badge 
                  variant="secondary" 
                  className={`px-4 py-2 text-dark-blue border-0 ${
                    isReadingWriting ? 'bg-light-blue' : 'bg-light-yellow'
                  }`}
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  {isReadingWriting ? numberRW! * 2 : numberMath! * 2} Questions
                </Badge>
                <Badge 
                  variant="outline" 
                  className="border-sky-blue text-sky-blue px-4 py-2"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {isReadingWriting ? numberRW! * 3 : numberMath! * 3} minutes
                </Badge>
              </div>

              {/* Section Description */}
              <CardDescription className="text-large text-dark-blue max-w-2xl mx-auto mb-8">
                {isReadingWriting ? "Test your reading comprehension, writing skills, grammar knowledge, and vocabulary understanding.": "Demonstrate your mathematical reasoning and problem-solving abilities across multiple domains."}
              </CardDescription>

              {/* Section Skills */}
              <div className={`p-6 rounded-lg mb-8 ${
                isReadingWriting 
                  ? 'bg-light-blue/20 border border-sky-blue/30' 
                  : 'bg-light-yellow/20 border border-sunshine-yellow/30'
              }`}>
                <h4 className="text-dark-blue font-medium mb-4">What You'll Be Tested On:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                  {currentSection.skills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        isReadingWriting ? 'bg-sky-blue' : 'bg-sunshine-yellow'
                      }`} />
                      <span className="text-dark-blue text-small">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calculator Instructions for Math Section */}
              {!isReadingWriting && (
                <Card className="bg-sky-blue/10 border border-sky-blue/30 mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Calculator className="w-6 h-6 text-sky-blue flex-shrink-0 mt-1" />
                      <div className="text-left">
                        <h4 className="text-dark-blue font-medium mb-2">Calculator Guidelines</h4>
                        <p className="text-dark-blue mb-4">
                          <strong>Directions:</strong> While solving the questions, feel free to use any calculator or DESMOS Calculator for computational assistance.
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          className="border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white"
                        >
                          <a 
                            href="https://www.desmos.com/calculator" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            Open DESMOS Calculator
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardHeader>
            
            <CardContent className="text-center pt-4 pb-8">
              {/* Ready to Begin */}
              <div className="mb-6">
                <h4 className="text-dark-blue mb-2">Ready to Begin?</h4>
                <p className="text-small text-dark-blue opacity-70">
                  Once you start, the timer will begin and cannot be paused.
                </p>
              </div>

              <Button
                onClick={onStart}
                size="lg"
                className="shadow-xl transform hover:scale-105 transition-all duration-200 bg-sunshine-yellow text-dark-blue hover:bg-sunshine-yellow/90 border-0 px-8"
                style={{ height: '56px' }}
              >
                <span className="text-large font-medium">Start {isReadingWriting ? 'Reading & Writing' : 'Math'} Section</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              
              <div className="mt-4 text-small text-dark-blue opacity-70">
                Good luck! Take your time and read each question carefully.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DiagnosticSectionIntro;
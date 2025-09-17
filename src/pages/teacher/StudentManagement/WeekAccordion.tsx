import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/Accordion';
import type { StudyPlan } from '../../../types/student-management';
import { Badge } from '../../../components/Badge';
import { Clock, BookOpen, Brain, Target } from 'lucide-react'

interface WeekAccordionProps {
  plan: StudyPlan
}

const WeekAccordion: React.FC<WeekAccordionProps> = ({ plan }: WeekAccordionProps) => {
  const getPriority = (priority: "PRIORITY_GAP" | "DEVELOPING" | "PROFICIENT" | "MASTERED" | "UNKNOWN") => {
    switch (priority) {
      case "PRIORITY_GAP" :
      case "DEVELOPING":
        return {
          name: "High",
          style: {
            backgroundColor: '#ef4444',
            color: '#ffffff',
            border: 'none'
          }
        }
      case "PROFICIENT":
        return {
          name: "Medium",
          style: {
            backgroundColor: '#3fa3f6',
            color: '#ffffff',
            border: 'none'
          }
        }
      case "MASTERED":
        return {
          name: "Low",
          style: {
            backgroundColor: '#fcda49',
            color: '#00213e',
            border: 'none'
          }
        }
    }
  }

  const getSectionBadgeStyle = (section: 'Math' | 'RW') => {
    return section === 'Math' 
      ? {
          backgroundColor: '#feefad',
          color: '#00213e',
          border: '1px solid rgba(252, 218, 73, 0.3)'
        }
      : {
          backgroundColor: '#b2dafb',
          color: '#00213e',
          border: '1px solid rgba(63, 163, 246, 0.3)'
        }
  }

  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {plan.weeks.map((week) => {
        const totalMinutes = week.blocks.reduce((sum, block) => sum + block.minutes, 0)
        const mathBlocks = week.blocks.filter(block => block.section === 'Math')
        const englishBlocks = week.blocks.filter(block => block.section === 'RW')
        
        return (
          <AccordionItem 
            key={week.week} 
            value={`week-${week.week}`}
            className="border rounded-lg"
            style={{ backgroundColor: '#ffffff', borderColor: 'rgba(63, 163, 246, 0.2)' }}
          >
            <AccordionTrigger 
              className="px-6 py-4 hover:no-underline"
              style={{ color: '#00213e' }}
            >
              <div className="flex items-center justify-between w-full mr-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#b2dafb' }}>
                    <BookOpen className="h-5 w-5" style={{ color: '#00213e' }} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-bold" style={{ fontSize: '16px', color: '#00213e' }}>
                      Week {week.week}
                    </h4>
                    <p style={{ fontSize: '14px', color: 'rgba(0, 33, 62, 0.7)' }}>
                      {week.blocks.length} topics • {totalMinutes} minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" style={{ color: '#3fa3f6' }} />
                    <span style={{ fontSize: '14px', color: '#3fa3f6', fontWeight: '500' }}>
                      {totalMinutes} min
                    </span>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="space-y-4">
                {/* Math Blocks */}
                {mathBlocks.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4" style={{ color: '#fcda49' }} />
                      <h5 className="font-heading font-bold" style={{ fontSize: '14px', color: '#00213e' }}>
                        Math Topics ({mathBlocks.length})
                      </h5>
                    </div>
                    <div className="space-y-2">
                      {mathBlocks.map((block, index) => (
                        <div 
                          key={index}
                          className="p-3 rounded-lg border"
                          style={{ backgroundColor: '#feefad', borderColor: 'rgba(252, 218, 73, 0.3)' }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h6 className="font-heading font-bold" style={{ fontSize: '14px', color: '#00213e' }}>
                              {block.topic}
                            </h6>
                            <div className="flex items-center space-x-2">
                              <Badge 
                                style={getSectionBadgeStyle(block.section)}
                                className="text-xs px-2 py-1"
                              >
                                {block.section === "Math" ? "Math": "English"}
                              </Badge>
                              <Badge 
                                style={getPriority(block.mastery)?.style}
                                className="text-xs px-2 py-1"
                              >
                                {getPriority(block.mastery)?.name}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" style={{ color: 'rgba(0, 33, 62, 0.7)' }} />
                                <span style={{ fontSize: '12px', color: 'rgba(0, 33, 62, 0.7)' }}>
                                  {block.minutes} minutes
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* English Blocks */}
                {englishBlocks.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Brain className="h-4 w-4" style={{ color: '#3fa3f6' }} />
                      <h5 className="font-heading font-bold" style={{ fontSize: '14px', color: '#00213e' }}>
                        English Topics ({englishBlocks.length})
                      </h5>
                    </div>
                    <div className="space-y-2">
                      {englishBlocks.map((block, index) => (
                        <div 
                          key={index}
                          className="p-3 rounded-lg border"
                          style={{ backgroundColor: '#b2dafb', borderColor: 'rgba(63, 163, 246, 0.3)' }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h6 className="font-heading font-bold" style={{ fontSize: '14px', color: '#00213e' }}>
                              {block.topic}
                            </h6>
                            <div className="flex items-center space-x-2">
                              <Badge 
                                style={getSectionBadgeStyle(block.section)}
                                className="text-xs px-2 py-1"
                              >
                                {block.section}
                              </Badge>
                              <Badge 
                                style={getPriority(block.mastery)?.style}
                                className="text-xs px-2 py-1"
                              >
                                {getPriority(block.mastery)?.name}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" style={{ color: 'rgba(0, 33, 62, 0.7)' }} />
                                <span style={{ fontSize: '12px', color: 'rgba(0, 33, 62, 0.7)' }}>
                                  {block.minutes} minutes
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default WeekAccordion;
import type { StudyPlan } from '../../../types/student-management';
import { Card, CardContent } from '../../../components/Card';
import { Clock, BookOpen, Target, TrendingUp } from 'lucide-react'

interface SummaryBarProps {
  plan: StudyPlan
}

const SummaryBar: React.FC<SummaryBarProps> = ({ plan }: SummaryBarProps) => {
  const totalMinutes = plan.weeks.reduce((sum, week) => 
    sum + week.blocks.reduce((weekSum, block) => weekSum + block.minutes, 0), 0
  )

  const mathMinutes = plan.weeks.reduce((sum, week) => 
    sum + week.blocks
      .filter(block => block.section === 'Math')
      .reduce((sectionSum, block) => sectionSum + block.minutes, 0), 0
  )

  const englishMinutes = plan.weeks.reduce((sum, week) => 
    sum + week.blocks
      .filter(block => block.section === 'RW')
      .reduce((sectionSum, block) => sectionSum + block.minutes, 0), 0
  )

  const highPriorityTopics = plan.weeks.reduce((total, week) => 
    total + week.blocks.filter(block => block.mastery === 'PRIORITY_GAP' || 'DEVELOPING').length, 0
  )

  const totalTopics = plan.weeks.reduce((total, week) => total + week.blocks.length, 0)

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours > 0) {
      return `${hours}h ${mins}m`
    }
    return `${mins}m`
  }

  const summaryStats = [
    {
      icon: Clock,
      label: 'Total Study Time',
      value: formatTime(totalMinutes),
      subtext: `${plan.meta.cap_per_week} min/week cap`,
      color: '#3fa3f6',
      bgColor: '#b2dafb'
    },
    {
      icon: BookOpen,
      label: 'Total Topics',
      value: totalTopics.toString(),
      subtext: `${plan.weeks.length} weeks planned`,
      color: '#fcda49',
      bgColor: '#feefad'
    },
    {
      icon: Target,
      label: 'High Priority',
      value: highPriorityTopics.toString(),
      subtext: 'focus areas',
      color: '#ef4444',
      bgColor: '#fee2e2'
    },
    {
      icon: TrendingUp,
      label: 'Math vs English',
      value: `${Math.round((mathMinutes / totalMinutes) * 100)}% / ${Math.round((englishMinutes / totalMinutes) * 100)}%`,
      subtext: 'time distribution',
      color: '#22c55e',
      bgColor: '#dcfce7'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {summaryStats.map((stat, index) => {
        const IconComponent = stat.icon
        return (
          <Card 
            key={index}
            className="border transition-all duration-200 hover:shadow-lg"
            style={{ 
              backgroundColor: '#ffffff', 
              borderColor: 'rgba(63, 163, 246, 0.2)' 
            }}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <IconComponent 
                    className="h-5 w-5" 
                    style={{ color: stat.color }} 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ fontSize: '12px', color: 'rgba(0, 33, 62, 0.7)' }}>
                    {stat.label}
                  </p>
                  <p className="font-heading font-bold" style={{ fontSize: '18px', color: '#00213e' }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '11px', color: 'rgba(0, 33, 62, 0.5)' }}>
                    {stat.subtext}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default SummaryBar;
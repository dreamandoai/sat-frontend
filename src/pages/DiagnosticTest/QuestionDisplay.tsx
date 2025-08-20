import React from 'react';
import { Badge } from '../../components/Badge';
import type { AdaptiveQuestion, Topic } from '../../types/diagnostic';
import { 
  formatCrossTextConnections, 
  formatRhetoricalSynthesis, 
  formatPassageWithBackgroundInfo, 
  formatUnderlinedSentence 
} from '../../utils/formatters'

interface QuestionDisplayProps {
  question: AdaptiveQuestion
  selectedAnswer: number | null
  onAnswer: (answerIndex: number) => void
  topic: Topic
}

const QuestionDisplay = ({ question, selectedAnswer, onAnswer, topic }: QuestionDisplayProps) => {
  // Render passage based on question type
  const renderPassage = () => {
    if (!question.passage) return null

    if (topic.name === 'CROSS TEXT CONNECTIONS') {
      return formatCrossTextConnections(question.passage)
    } else if (topic.name === 'RHETORICAL SYNTHESIS') {
      return formatRhetoricalSynthesis(question.passage)
    } else if (topic.name === 'UNDERLINED SENTENCE') {
      return formatUnderlinedSentence(question.passage, question.difficulty)
    } else {
      return formatPassageWithBackgroundInfo(question.passage)
    }
  }

  return (
    <div className="space-y-6">
      {/* Question Type Badge */}
      <div className="flex items-center justify-start">
        <Badge 
          variant="secondary" 
          className="px-3 py-1 bg-light-yellow text-dark-blue border-0"
        >
          {topic.name}
        </Badge>
      </div>

      {/* Chart Image */}
      {question.chart_image && (
        <div className="bg-white p-4 border border-sky-blue/20 rounded-lg shadow-sm">
          <img
            src={question.chart_image}
            alt="Chart or graph for analysis"
            className="w-full h-auto max-w-2xl mx-auto"
          />
        </div>
      )}

      {/* Figure Image */}
      {question.figure_image && (
        <div className="bg-white p-4 border border-sky-blue/20 rounded-lg shadow-sm">
          <img
            src={question.figure_image}
            alt="Mathematical figure or diagram"
            className="w-full h-auto max-w-lg mx-auto"
          />
        </div>
      )}

      {/* Passage */}
      {question.passage && (
        <div className="p-6 border-l-4 border-sky-blue bg-light-blue/10 rounded-lg">
          {renderPassage()}
        </div>
      )}

      {/* Question */}
      <div>
        <h3 className="mb-6 text-dark-blue">
          {/* Render questions with line breaks */}
          {question.question.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < question.question.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>

        {/* Answer Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              className={`w-full p-4 text-left border-2 transition-all duration-200 hover:shadow-md rounded-lg ${
                selectedAnswer === index
                  ? 'border-sky-blue bg-sky-blue/10'
                  : 'border-gray-200 bg-white hover:border-sky-blue/50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <span 
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-small font-medium ${
                    selectedAnswer === index
                      ? 'border-sky-blue bg-sky-blue text-white'
                      : 'border-gray-300 text-dark-blue'
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 text-dark-blue">
                  {/* Render options with line breaks */}
                  {option.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < option.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuestionDisplay;
import React, { useMemo } from 'react';
import type { DiagnosticResult, Student } from '../../../types/student-management';
import { Card, CardContent } from '../../../components/Card';
import { Badge } from '../../../components/Badge';
import { CheckCircle, X } from 'lucide-react';

interface RightPanelProps {
  selectedStudent: Student | null;
  diagnosticResults: DiagnosticResult[];
}

const RightPanel: React.FC<RightPanelProps> = ({ selectedStudent, diagnosticResults }) => {
  const mathDiagnosticResults = useMemo(
    () => diagnosticResults.filter((d: DiagnosticResult) => d.section === "Math"), 
    [diagnosticResults]
  );

  const rwDiagnosticResults = useMemo(
    () => diagnosticResults.filter((d: DiagnosticResult) => d.section === "RW"), 
    [diagnosticResults]
  );

  const getTopicsSummary = (topics: DiagnosticResult[]) => {
    const totalQuestions = topics.length * 2;
    let correctAnswers = 0;
    let difficultyStats = {
      easy: 0,
      medium: 0,
      hard: 0,
    };
    
    topics.forEach(topic => {
      if (topic.medium.correct) correctAnswers++;
      difficultyStats.medium++;
      
      if (topic.follow_up.correct) correctAnswers++;
      difficultyStats[topic.follow_up.level]++;
    });

    return { 
      correct: correctAnswers, 
      total: totalQuestions, 
      byDifficulty: difficultyStats,
      topicsCompleted: topics.length
    };
  };

  const getDifficultyBadgeStyle = (difficulty: 'easy' | 'medium' | 'hard') => {
    switch (difficulty) {
      case 'easy':
        return {
          backgroundColor: '#fcda49',
          color: '#00213e',
          border: 'none'
        }
      case 'medium':
        return {
          backgroundColor: '#3fa3f6',
          color: '#ffffff',
          border: 'none'
        }
      case 'hard':
        return {
          backgroundColor: '#00213e',
          color: '#ffffff',
          border: 'none'
        }
    }
  }
  
  const renderTopicResults = (topicResults: DiagnosticResult[], subjectName: string) => {
    return (
      <div className='mb-6'>
        <div className="border-2 rounded-lg p-4" style={{ backgroundColor: '#b2dafb', borderColor: 'rgba(63, 163, 246, 0.3)' }}>
          <h4 className="font-heading font-bold mb-3" style={{ fontSize: '14px', color: '#00213e' }}>
            {subjectName.toUpperCase()} TOPICS ({topicResults.length} topics • {topicResults.length * 2} questions)
          </h4>
          <div className="max-h-48 overflow-y-auto space-y-3 pr-2 students-topic-scroll">
            {topicResults.map((topicResult, index) => (
              <div key={index} className="space-y-2">
                <div className="font-medium" style={{ fontSize: '14px', color: '#00213e' }}>
                  {topicResult.topic_name}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between p-2 rounded" style={{ backgroundColor: '#ffffff' }}>
                    <span style={{ fontSize: '12px', color: '#00213e' }}>
                      Question 1 (Medium)
                    </span>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        style={getDifficultyBadgeStyle('medium')}
                        className="text-xs px-2 py-1"
                      >
                        MEDIUM
                      </Badge>
                      {topicResult.medium.correct ? (
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="h-4 w-4" style={{ color: '#22c55e' }} />
                          <span style={{ fontSize: '12px', color: '#22c55e' }}>CORRECT</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1">
                          <X className="h-4 w-4" style={{ color: '#ef4444' }} />
                          <span style={{ fontSize: '12px', color: '#ef4444' }}>INCORRECT</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between p-2 rounded" style={{ backgroundColor: '#ffffff' }}>
                    <span style={{ fontSize: '12px', color: '#00213e' }}>
                      Question 2 ({topicResult.follow_up.level === "easy" ? "Easy" : "Hard"})
                    </span>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        style={getDifficultyBadgeStyle(topicResult.follow_up.level)}
                        className="text-xs px-2 py-1"
                      >
                        {topicResult.follow_up.level.toUpperCase()}
                      </Badge>
                      {topicResult.follow_up.correct ? (
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="h-4 w-4" style={{ color: '#22c55e' }} />
                          <span style={{ fontSize: '12px', color: '#22c55e' }}>CORRECT</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1">
                          <X className="h-4 w-4" style={{ color: '#ef4444' }} />
                          <span style={{ fontSize: '12px', color: '#ef4444' }}>INCORRECT</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="lg:col-span-8">
      {selectedStudent ? (
        <Card style={{ backgroundColor: '#ffffff', borderColor: 'rgba(63, 163, 246, 0.2)' }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-bold" style={{ fontSize: '18px', color: '#00213e' }}>
                Student Profile
              </h2>
            </div>

            {/* Student Info */}
            <div className="mb-6">
              <h3 className="font-heading font-bold mb-1" style={{ fontSize: '24px', color: '#00213e' }}>
                {selectedStudent.first_name} {selectedStudent.last_name}
              </h3>
              <p style={{ color: 'rgba(0, 33, 62, 0.7)', fontSize: '14px' }}>
                {selectedStudent.email}
              </p>
            </div>

            {/* Diagnostic Test Results */}
            <div className="space-y-6">
              {/* Test Completion Date */}
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#b2dafb', borderColor: 'rgba(63, 163, 246, 0.3)' }}>
                <p className="text-center" style={{ fontSize: '14px', color: '#00213e' }}>
                  Test completed on {selectedStudent.tested_date}
                </p>
              </div>

              {/* Subject Summary Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(63, 163, 246, 0.2)' }}>
                  <h5 className="font-heading font-bold mb-1" style={{ fontSize: '16px', color: '#00213e' }}>
                    Math: {getTopicsSummary(mathDiagnosticResults).correct}/{getTopicsSummary(mathDiagnosticResults).total}
                  </h5>
                  <p style={{ fontSize: '12px', color: 'rgba(0, 33, 62, 0.7)' }}>
                    {mathDiagnosticResults.length} topics • {mathDiagnosticResults.length * 2} questions
                  </p>
                </div>
                <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(63, 163, 246, 0.2)' }}>
                  <h5 className="font-heading font-bold mb-1" style={{ fontSize: '16px', color: '#00213e' }}>
                    English: {getTopicsSummary(rwDiagnosticResults).correct}/{getTopicsSummary(rwDiagnosticResults).total}
                  </h5>
                  <p style={{ fontSize: '12px', color: 'rgba(0, 33, 62, 0.7)' }}>
                    {rwDiagnosticResults.length} topics • {rwDiagnosticResults.length * 2} questions
                  </p>
                </div>
              </div>

              {/* Diagnostic Test Results Header */}
              <div className="text-center mb-4">
                <h3 className="font-heading font-bold mb-2" style={{ fontSize: '20px', color: '#00213e' }}>
                  Diagnostic Test Results
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(0, 33, 62, 0.7)' }}>
                  Detailed performance analysis by topic and difficulty level
                </p>
              </div>

              {/* Detailed Results */}
              <div className="space-y-6">
                <div>
                  {renderTopicResults(mathDiagnosticResults, "math")}
                  {renderTopicResults(rwDiagnosticResults, "english")}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card style={{ backgroundColor: '#ffffff', borderColor: 'rgba(63, 163, 246, 0.2)' }}>
          <CardContent className="p-6">
            <div className="text-center py-12">
              <p style={{ color: 'rgba(0, 33, 62, 0.6)', fontSize: '16px' }}>
                Select a student to view their profile and diagnostic results
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default RightPanel;

import React from 'react';
import { Search } from 'lucide-react'
import { Input } from '../../../components/Input';
import { Card, CardContent } from '../../../components/Card';
import type { Student } from '../../../types/student-management';

interface LeftPanelProps {
  students: Student[];
  selectedStudent: Student | null;
  onSelectedStudent: (student: Student) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  students,
  selectedStudent,
  onSelectedStudent,
  searchQuery,
  onSearchQueryChange
}) => {
  
  return (
    <div className="lg:col-span-4">
      <Card className="h-full" style={{ backgroundColor: '#ffffff', borderColor: 'rgba(63, 163, 246, 0.2)' }}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-bold" style={{ fontSize: '18px', color: '#00213e' }}>
              Students
            </h2>
          </div>
          
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: 'rgba(0, 33, 62, 0.5)' }} />
            <Input
              placeholder="Search students"
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              className="pl-10"
              style={{ backgroundColor: '#feefad', borderColor: 'rgba(63, 163, 246, 0.3)' }}
            />
          </div>
          
          {/* Student List */}
          <div className="space-y-2">
            {students.map((student) => (
              <button
                key={student.id}
                onClick={() => onSelectedStudent(student)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedStudent?.id === student.id 
                    ? 'bg-sky-blue text-white' 
                    : 'hover:bg-light-blue/20'
                }`}
                style={{
                  backgroundColor: selectedStudent?.id === student.id ? '#3fa3f6' : 'transparent',
                  color: selectedStudent?.id === student.id ? '#ffffff' : '#00213e'
                }}
              >
                <div className="font-medium" style={{ fontSize: '14px' }}>
                  {student.first_name} {student.last_name}
                </div>
              </button>
            ))}
          </div>
          
          {students.length === 0 && (
            <div className="text-center py-8">
              <p style={{ color: 'rgba(0, 33, 62, 0.6)', fontSize: '14px' }}>
                No students found
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default LeftPanel;
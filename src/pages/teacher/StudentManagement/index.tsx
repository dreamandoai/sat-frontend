import React, { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import type { Student } from '../../../types/student-management';
import { studentManagementService } from '../../../services/studentManagementService';
import { setStudents, setDiagnosticResults, setSharedPlan } from '../../../store/studentManagementSlice';
import type { ApiError } from '../../../types/api';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const StudentManagement: React.FC = () => {
  const dispatch = useDispatch();
  const { students, diagnosticResults, studyPlan } = useSelector((state: RootState) => state.studentManagement);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [error, setError] = useState<string>("");

  const filteredStudents: Student[] = useMemo(() => {
    if (!searchQuery.trim()) return students;
    return students.filter(s => 
      `${s.first_name} ${s.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, students]);

  const handleGetStudents = async () => {
    try {
      const response = await studentManagementService.getStudents();
      dispatch(setStudents(response));
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'message' in error) {
        const apiError = error as ApiError;
        setError(apiError.data.detail);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  const handleGetDiagnosticResults = async (studentId: string) => {
    try {
      const response = await studentManagementService.getDiagnosticResults(studentId);
      if (response) {
        dispatch(setDiagnosticResults(response));
      }
    } catch (error) {
      const apiError = error as ApiError;
      console.error("Failed to fetch diagnostic results:", apiError.message);
    }
  };

  const handleGetSharedPlan = async (studentId: string) => {
    try {
      const response = await studentManagementService.getSharedPlan(studentId);
      if (response) {
        dispatch(setSharedPlan(response));
      }
    } catch (error) {
      const apiError = error as ApiError;
      console.error("Failed to fetch diagnostic results:", apiError.message);
    }
  };

  useEffect(() => {
    if (filteredStudents.length > 0) {
      setSelectedStudent(filteredStudents[0]);
    }
  }, [filteredStudents]);

  useEffect(() => {
    handleGetStudents();
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      handleGetDiagnosticResults(selectedStudent.id);
      handleGetSharedPlan(selectedStudent.id); 
    }
  }, [selectedStudent]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#b2dafb' }}>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
          <LeftPanel 
            students={filteredStudents}
            selectedStudent={selectedStudent}
            onSelectedStudent={setSelectedStudent}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
          />
          <RightPanel
            selectedStudent={selectedStudent}
            diagnosticResults={diagnosticResults}
            studyPlan={studyPlan}
          />
        </div>
      </div>
    </div>
  )
}


export default StudentManagement;
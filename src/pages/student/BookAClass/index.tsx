import React, { useEffect, useState } from 'react';
import Navbar from '../../../layouts/Navbar';
import Header from '../../../layouts/Header';
import { Button } from '../../../components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card';
import { Badge } from '../../../components/Badge';
import { Calendar, GraduationCap, Star, User, Calculator, BookOpen, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { pairService } from '../../../services/pairService';
import type { RootState } from '../../../store';
import { setTeachers } from '../../../store/pairSlice';
import type { ApiError } from '../../../types/api';
import type { TeacherShort } from '../../../types/bookaclass';

const BookAClass: React.FC = () => {
  const dispatch = useDispatch();
  const { teachers } = useSelector((state: RootState) => state.pair);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherShort | null>(null)
  const [error, setError] = useState<string>('');

  const getSubjectIcon = (subject: 'math' | 'rw') => {
    return subject === 'math' ? Calculator : BookOpen
  }

  const getSubjectColor = (subject: 'math' | 'rw') => {
    return subject === 'math' ? 'bg-sunshine-yellow text-dark-blue' : 'bg-sky-blue text-white'
  }

  const handleGetTeachers = async () => {
    try {
      const response = await pairService.getTeachers();
      dispatch(setTeachers(response));
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'message' in error) {
        const apiError = error as ApiError;
        setError(apiError.data.detail);
      } else {
        console.error('Error getting teachers:', error);
      }
    }
  }

  useEffect(() => {
    handleGetTeachers();
  }, []);

  return (
    <div className="min-h-screen bg-light-yellow">
      <Navbar />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h2 className="text-dark-blue mb-4">Your Teachers</h2>
          <p className="text-dark-blue opacity-80 max-w-2xl mx-auto">
            Book one-on-one sessions with our expert SAT tutors. Choose your subject and schedule a personalized lesson.
          </p>
        </div>

        {/* Teacher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teachers.map((teacher) => {
            const SubjectIcon = getSubjectIcon(teacher.subject)
            return (
              <Card 
                key={teacher.id} 
                className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <CardHeader className="text-center pb-4">
                  {/* Profile Image */}
                  <div className="relative mx-auto mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-light-blue group-hover:border-sky-blue transition-colors duration-300"> 
                      <User className="h-30 w-30 text-primary" />
                    </div>
                    {/* Subject Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className={`${getSubjectColor(teacher.subject)} px-3 py-1 shadow-lg`}>
                        <SubjectIcon className="h-4 w-4 mr-1" />
                        {teacher.subject === "math" ? "Math" : "English"}
                      </Badge>
                    </div>
                  </div>

                  {/* Teacher Name */}
                  <CardTitle className="text-dark-blue text-xl mb-6">
                    {teacher.first_name} {teacher.last_name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Book Now Button */}
                  <Button 
                    className="w-full bg-sunshine-yellow hover:bg-sunshine-yellow/90 text-dark-blue font-medium h-12 group-hover:scale-105 transition-transform duration-300"
                    onClick={() => {
                      setSelectedTeacher(teacher)
                      setIsDialogOpen(true)
                    }}
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="bg-sky-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-dark-blue mb-2">Flexible Scheduling</h3>
              <p className="text-small text-dark-blue opacity-70">
                Book sessions that fit your schedule with our easy-to-use calendar system
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="bg-sunshine-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-dark-blue mb-2">Expert Tutors</h3>
              <p className="text-small text-dark-blue opacity-70">
                Learn from experienced educators with proven track records
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="bg-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-dark-blue mb-2">Personalized Learning</h3>
              <p className="text-small text-dark-blue opacity-70">
                Get customized instruction tailored to your specific needs and goals
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      {/* Full-Screen Booking Modal */}
      {isDialogOpen && selectedTeacher && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-0 md:inset-4 bg-white md:rounded-lg shadow-2xl flex flex-col">
            {/* Header - 56px height */}
            <div className="h-14 flex items-center justify-between px-6 border-b border-gray-200 bg-white md:rounded-t-lg">
              <h2 className="text-xl font-semibold text-dark-blue">
                Book a Session with {selectedTeacher.first_name} {selectedTeacher.last_name}
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDialogOpen(false)}
                className="h-8 w-8 p-0 hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
            
            {/* Calendly Content - Fills remaining space */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`https://calendly.com/${selectedTeacher.calendar_name}`}
                width="100%"
                height="100%"
                frameBorder="0"
                title={`Book a session with ${selectedTeacher.first_name} ${selectedTeacher.last_name}`}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookAClass;

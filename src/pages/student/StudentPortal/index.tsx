import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Button } from "../../../components/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/Card";
import Navbar from "../../../layouts/Navbar";
import { BookOpen, Brain, Calendar, FileText, GraduationCap } from "lucide-react";
import type { RootState } from "../../../store";

const portalOptions = [
  {
    title: "Take Your Diagnostic Test Now",
    description: "Start with a comprehensive assessment to identify your strengths and areas for improvement",
    icon: FileText,
    color: "bg-sky-blue",
    hoverColor: "hover:bg-sky-blue/90"
  },
  {
    title: "Free SAT Resources",
    description: "Access our comprehensive library of study materials, practice questions, and guides",
    icon: BookOpen,
    color: "bg-sunshine-yellow",
    hoverColor: "hover:bg-sunshine-yellow/90"
  },
  {
    title: "SAT AI",
    description: "Get personalized study recommendations and instant feedback from our AI tutor",
    icon: Brain,
    color: "bg-sky-blue",
    hoverColor: "hover:bg-sky-blue/90"
  },
  {
    title: "Book a Class",
    description: "Schedule one-on-one sessions with our expert tutors for personalized guidance",
    icon: GraduationCap,
    color: "bg-sky-blue",
    hoverColor: "hover:bg-sky-blue/90"
  },
  {
    title: "Class Calendar",
    description: "View your upcoming sessions, assignments, and important SAT dates",
    icon: Calendar,
    color: "bg-sunshine-yellow",
    hoverColor: "hover:bg-sunshine-yellow/90"
  }
]

const StudentPortal: React.FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleOptionClick = (option: string) => {
    if (option === "Take Your Diagnostic Test Now") {
      // Navigate to internal diagnostic test
      navigate("/student/diagnostic");
    }
  }

  return (
    <div className="min-h-screen bg-light-yellow">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-dark-blue mb-2">Your SAT Journey Starts Here</h2>
          <p className="text-dark-blue opacity-80 max-w-2xl">
            Welcome to your personalized SAT preparation portal. Choose from the options below to begin your path to success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portalOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <Card 
                key={index} 
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${option.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-dark-blue group-hover:text-sky-blue transition-colors duration-300">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-dark-blue opacity-70 mb-4">
                    {option.description}
                  </CardDescription>
                  <Button 
                    className={`w-full ${option.color} ${option.hoverColor} text-white border-0 cursor-pointer`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleOptionClick(option.title)
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-sky-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-dark-blue mb-2">Current Score</h3>
                <p className="text-small text-dark-blue opacity-70">
                  Take your diagnostic test to establish your baseline
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-sunshine-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-dark-blue mb-2">Target Score</h3>
                <p className="text-body-large text-sky-blue">{user?.target_score}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-dark-blue mb-2">Days to Goal</h3>
                <p className="text-small text-dark-blue opacity-70">
                  Set your test date to track progress
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default StudentPortal;
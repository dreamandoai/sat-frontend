import { Button } from "../../components/Button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../../components/Card";
import { LogIn, UserPlus, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return(
    <div className="min-h-screen bg-light-yellow">
      <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="w-full max-w-4xl">
          {/* Welcome Header */}
          <div className="text-center mb-8">
            <h1 className="text-dark-blue mb-4">Welcome to Dreamando SAT Prep</h1>
            <p className="text-dark-blue opacity-80 max-w-2xl mx-auto">
              Join thousands of students who have improved their SAT scores with our comprehensive preparation platform
            </p>
          </div>
          {/* Login/Register Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Login Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-sky-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <LogIn className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-dark-blue group-hover:text-sky-blue transition-colors duration-300">
                  Log in Here
                </CardTitle>
                <CardDescription className="text-dark-blue opacity-70">
                  Welcome back! Continue your SAT preparation journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="text-center space-y-2">
                    <p className="text-dark-blue opacity-80">
                      Access your personalized dashboard
                    </p>
                    <ul className="text-small text-dark-blue opacity-70 space-y-1">
                      <li>• Continue where you left off</li>
                      <li>• View your progress reports</li>
                      <li>• Access your saved practice tests</li>
                      <li>• Schedule tutoring sessions</li>
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-sky-blue hover:bg-sky-blue/90 text-white h-12 cursor-pointer" 
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Register Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-sunshine-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UserPlus className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-dark-blue group-hover:text-sunshine-yellow transition-colors duration-300">
                  Register Here
                </CardTitle>
                <CardDescription className="text-dark-blue opacity-70">
                  New to Dreamando? Start your SAT success story today
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="text-center space-y-2">
                    <p className="text-dark-blue opacity-80">
                      Create your free account and get started
                    </p>
                    <ul className="text-small text-dark-blue opacity-70 space-y-1">
                      <li>• Take your diagnostic test</li>
                      <li>• Get personalized study plan</li>
                      <li>• Access thousands of practice questions</li>
                      <li>• Connect with expert tutors</li>
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-sunshine-yellow hover:bg-sunshine-yellow/90 text-white h-12 cursor-pointer" 
                    onClick={() => navigate("/register")}
                  >
                    Create Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Dashboard;
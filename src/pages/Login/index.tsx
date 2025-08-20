import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/Card';
import { ArrowLeft } from 'lucide-react';
import { authService } from "../../services/authService";
import { setCredentials } from '../../store/authSlice';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authService.login({ email, password });
      dispatch(setCredentials(response));
      navigate('/student-portal');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-light-yellow">
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md">
          <Card className="shadow-lg border-2" style={{ borderColor: 'rgba(0, 33, 62, 0.1)', borderRadius: '8px' }}>
            <CardHeader className="text-center space-y-4" style={{ backgroundColor: '#b2dafb', borderRadius: '8px 8px 0 0' }}>
              <div className="flex items-center justify-between">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-dark-blue hover:text-sky-blue hover:bg-white/20 p-2"
                  onClick={() => navigate(-1)}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div className="flex-1" />
              </div>
              <CardTitle 
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '36px',
                  color: '#00213e',
                  margin: 0 
                }}
              >
                Welcome Back
              </CardTitle>
              <CardDescription
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '18px',
                  color: '#00213e',
                  margin: 0 
                }}
              >
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label 
                    htmlFor="email"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: '16px',
                      color: '#00213e',
                      fontWeight: 400
                    }}
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                    style={{ 
                      borderRadius: '8px',
                      border: '2px solid rgba(0, 33, 62, 0.2)',
                      backgroundColor: '#ffffff',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      color: '#00213e',
                      padding: '0 16px'
                    }}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label 
                    htmlFor="password"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: '16px',
                      color: '#00213e',
                      fontWeight: 400
                    }}
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12"
                    style={{ 
                      borderRadius: '8px',
                      border: '2px solid rgba(0, 33, 62, 0.2)',
                      backgroundColor: '#ffffff',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      color: '#00213e',
                      padding: '0 16px'
                    }}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12"
                  style={{ 
                    backgroundColor: '#3fa3f6',
                    color: '#ffffff',
                    borderRadius: '8px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    border: 'none',
                    padding: '16px 24px'
                  }}
                >
                  Sign In
                </Button>
              </form>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4 text-center">
              <div className="text-sm">
                <a 
                  href="#" 
                  className="hover:underline"
                  style={{ 
                    color: '#3fa3f6',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px'
                  }}
                >
                  Forgot your password?
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <small style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  color: '#00213e'
                }}>
                  Don't have an account?
                </small>
                <a 
                  href="#" 
                  className="hover:underline"
                  onClick={handleRegisterClick}
                  style={{ 
                    color: '#3fa3f6',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  Sign up
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login
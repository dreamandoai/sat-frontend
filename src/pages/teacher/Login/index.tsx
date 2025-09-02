import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Label } from '../../../components/Label';
import { Alert, AlertDescription } from '../../../components/Alert';
import { ArrowLeft, GraduationCap, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { authService } from "../../../services/authService";
import { setCredentials } from '../../../store/authSlice';
import type { RootState } from '../../../store';
import type { ApiError } from '../../../types/api';

const Login: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await authService.login({ email, password, role: "teacher" });
      dispatch(setCredentials(response));
      navigate('/teacher/portal');
    } catch (error) {
      setIsLoading(false);
      if (typeof error === 'object' && error !== null && 'message' in error) {
        const apiError = error as ApiError;
        setError(apiError.data.detail);
      } else {
        console.error('Login failed:', error);
      }
    }
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/teacher/register");
  };

  useEffect(() => {
    if(isAuthenticated && user?.role === "teacher") {
      navigate("/teacher/portal");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b2dafb] via-[#feefad] to-[#b2dafbcc]">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 p-2 rounded-lg border border-[#3fa3f633] bg-white text-[#00213e] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl backdrop-blur-sm border border-[#3fa3f633] bg-white">
          <div className="text-center mb-8">
            <div className="p-4 rounded-2xl inline-block mb-4 bg-gradient-to-br from-[#3fa3f6] to-[#fcda49]">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading font-bold mb-2 text-[28px] text-[#00213e]">
              Teacher Login
            </h1>
            <p className="text-base text-[#00213e]/70">
              Sign in to access teacher portal
            </p>
          </div>
          {error && (
            <Alert className="mb-6 border-red-200 bg-red-50 rounded-lg" variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-red-800">{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-[#00213e] text-base"
              >
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-lg border-2 border-[#3fa3f64d] bg-[#feefad] text-[#00213e] h-12 text-base transition-all duration-300 focus:shadow-lg"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-[#00213e] text-base"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-lg border-2 border-[#3fa3f64d] bg-[#feefad] text-[#00213e] h-12 text-base pr-12 transition-all duration-300 focus:shadow-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-[#00213e]/60 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 px-6 py-4 text-base font-medium rounded-lg shadow-lg bg-[#3fa3f6] text-white transition-all duration-300 hover:shadow-xl disabled:opacity-50"
            >
              {isLoading ? 
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent mr-3" />
                  Signing In...
                </> : 'Sign In'
              }
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-[#00213e]/60">
              Don&apos;t have an account?{' '}
              <button
                onClick={handleRegisterClick}
                className="font-medium text-[#3fa3f6] hover:underline transition-colors"
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
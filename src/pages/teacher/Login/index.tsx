import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Label } from '../../../components/Label';
import { ArrowLeft, Users, Eye, EyeOff } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b2dafb] via-[#feefad] to-[rgba(178,218,251,0.8)]">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <button
          className="absolute top-6 left-6 p-2 rounded-lg bg-white border border-[rgba(63,163,246,0.2)] text-[#00213e] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl backdrop-blur-sm border border-[rgba(63,163,246,0.2)] bg-white">
          <div className="text-center mb-8">
            <div className="p-4 rounded-2xl inline-block mb-4 bg-gradient-to-br from-[#3fa3f6] to-[#fcda49]">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading font-bold mb-2 text-[28px] text-[#00213e]">
              Teacher Login
            </h1>
            <p className="text-[16px] text-[rgba(0,33,62,0.7)]">
              Sign in to access your teacher portal
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#00213e] text-[16px]">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-lg border-2 border-[rgba(63,163,246,0.3)] bg-[#feefad] text-[#00213e] h-12 text-[16px] transition-all duration-300 focus:shadow-lg"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#00213e] text-[16px]">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-lg border-2 border-[rgba(63,163,246,0.3)] bg-[#feefad] text-[#00213e] h-12 text-[16px] pr-12 transition-all duration-300 focus:shadow-lg"
                  placeholder=""
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-[rgba(0,33,62,0.6)] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              disabled={isLoading || !email || !password}
              className="w-full h-12 px-6 py-4 font-medium text-[16px] rounded-lg shadow-lg bg-[#3fa3f6] text-white hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-[14px] text-[rgba(0,33,62,0.6)]">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/teacher/register')}
                className="font-medium text-[#3fa3f6] hover:underline transition-colors"
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
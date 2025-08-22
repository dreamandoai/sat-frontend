import { useState } from 'react'
import { useNavigate } from 'react-router';
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Label } from '../../../components/Label'
import { ArrowLeft, GraduationCap, EyeOff, Eye } from 'lucide-react';
import { authService } from "../../../services/authService";
import type { RegisterCredentials, RegisterResponse } from "../../../types/auth";

interface FormData {
  name: string
  surname: string
  targetScore: number
  email: string
  password: string
  retypePassword: string
}

interface FormErrors {
  name?: string
  surname?: string
  targetScore?: string
  email?: string
  password?: string
  retypePassword?: string
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    targetScore: 0,
    email: '',
    password: '',
    retypePassword: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [showRetypePassword, setShowRetypePassword] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Surname validation
    if (!formData.surname.trim()) {
      newErrors.surname = 'Surname is required'
    } else if (formData.surname.trim().length < 2) {
      newErrors.surname = 'Surname must be at least 2 characters'
    }

    // Target score validation
    const score = formData.targetScore;
    if (isNaN(score) || score < 400 || score > 1600) {
      newErrors.targetScore = 'Target score must be a number between 400 and 1600'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    }

    // Retype password validation
    if (!formData.retypePassword) {
      newErrors.retypePassword = 'Please retype your password'
    } else if (formData.password !== formData.retypePassword) {
      newErrors.retypePassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        const response: RegisterResponse = await authService.register({ 
          first_name: formData.name, 
          last_name: formData.surname,
          email: formData.email,
          password: formData.password,
          target_score: formData.targetScore 
        } as RegisterCredentials);
        if(response.status === "success") {
          navigate('/login');
        }
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials.');
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b2dafb] via-[#feefad] to-[#b2dafbcc]">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <button
          onClick={() => navigate("/student/login")}
          className="absolute top-6 left-6 p-2 rounded-lg border border-[#3fa3f633] bg-white text-[#00213e] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl backdrop-blur-sm border border-[#3fa3f633] bg-white">
          <div className="text-center mb-8">
            <div className="p-4 rounded-2xl inline-block mb-4 bg-gradient-to-br from-[#fcda49] to-[#3fa3f6]">
              <GraduationCap className="h-8 w-8 text-[#00213e]" />
            </div>
            <h1 className="font-heading font-bold mb-2 text-[28px] text-[#00213e]">
              Student Registration
            </h1>
            <p className="text-base text-[#00213e]/70">
              Create your student account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#00213e] text-base">Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`bg-[#feefad] rounded-lg border-2 text-dark-blue text-base transition-all duration-300 focus:shadow-lg ${
                  errors.name ? 'border-red-500' : 'border-[#3fa3f64d] focus:border-sky-blue'
                }`}
                placeholder="Enter your first name"
              />
              {errors.name && (
                <p className="text-red-500 text-small">{errors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="surname" className="text-dark-blue">Surname</Label>
              <Input
                id="surname"
                type="text"
                value={formData.surname}
                onChange={(e) => handleInputChange('surname', e.target.value)}
                className={`bg-[#feefad] rounded-lg border-2 text-dark-blue text-base transition-all duration-300 focus:shadow-lg ${
                  errors.surname ? 'border-red-500' : 'border-[#3fa3f64d] focus:border-sky-blue'
                }`}
                placeholder="Enter your last name"
              />
              {errors.surname && (
                <p className="text-red-500 text-small">{errors.surname}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetScore" className="text-dark-blue">Target Score</Label>
              <Input
                id="targetScore"
                type="number"
                value={formData.targetScore}
                onChange={(e) => handleInputChange('targetScore', parseFloat(e.target.value))}
                className={`bg-[#feefad] rounded-lg border-2 text-dark-blue text-base transition-all duration-300 focus:shadow-lg ${
                  errors.targetScore ? 'border-red-500' : 'border-[#3fa3f64d] focus:border-sky-blue'
                }`}
                placeholder="Enter your target score (400-1600)"
              />
              {errors.targetScore && (
                <p className="text-red-500 text-small">{errors.targetScore}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-dark-blue">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`bg-[#feefad] rounded-lg border-2 text-dark-blue text-base transition-all duration-300 focus:shadow-lg ${
                  errors.email ? 'border-red-500' : 'border-[#3fa3f64d] focus:border-sky-blue'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-small">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-dark-blue">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`bg-[#feefad] rounded-lg border-2 text-dark-blue text-base transition-all duration-300 focus:shadow-lg ${
                    errors.password ? 'border-red-500' : 'border-[#3fa3f64d] focus:border-sky-blue'
                  }`}
                  placeholder="Create a secure password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-blue/50 hover:text-dark-blue"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-small">{errors.password}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="retypePassword" className="text-dark-blue">Retype Password</Label>
              <div className="relative">
                <Input
                  id="retypePassword"
                  type={showRetypePassword ? 'text' : 'password'}
                  value={formData.retypePassword}
                  onChange={(e) => handleInputChange('retypePassword', e.target.value)}
                  className={`bg-[#feefad] rounded-lg border-2 text-dark-blue text-base transition-all duration-300 focus:shadow-lg ${
                    errors.retypePassword ? 'border-red-500' : 'border-[#3fa3f64d] focus:border-sky-blue'
                  }`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowRetypePassword(!showRetypePassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-blue/50 hover:text-dark-blue"
                >
                  {showRetypePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.retypePassword && (
                <p className="text-red-500 text-small">{errors.retypePassword}</p>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-sky-blue hover:bg-sky-blue/90 text-white h-12 px-6"
            >
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/Card'
import { Eye, EyeOff, ArrowLeft } from 'lucide-react'

interface FormData {
  name: string
  surname: string
  targetScore: string
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

interface RegisterProps {
  onBack?: () => void
  onRegistrationSuccess: (userData: { firstName: string; lastName: string; targetScore: string; email: string }) => void
}

const Register: React.FC<RegisterProps> = ({ onBack, onRegistrationSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    targetScore: '',
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
    if (!formData.targetScore.trim()) {
      newErrors.targetScore = 'Target score is required'
    } else {
      const score = parseFloat(formData.targetScore)
      if (isNaN(score) || score < 400 || score > 1600) {
        newErrors.targetScore = 'Target score must be a number between 400 and 1600'
      }
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

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send data to your backend
      console.log('Registration data:', formData)
      
      // Navigate to student portal with user data
      onRegistrationSuccess({
        firstName: formData.name,
        lastName: formData.surname,
        targetScore: formData.targetScore,
        email: formData.email
      })
    }
  }

  return (
    <div className="min-h-screen bg-light-yellow">
      <div className="flex items-center justify-center h-screen">
        <Card className="w-full max-w-md bg-white shadow-lg">
          <CardHeader className="space-y-2">
            <div className="flex items-center space-x-3">
              {onBack && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={onBack}
                  className="text-dark-blue hover:text-sky-blue hover:bg-sky-blue/10 p-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              )}
              <div className="flex-1 text-center">
                <CardTitle className="text-dark-blue">Create Your Account</CardTitle>
                <CardDescription className="text-dark-blue opacity-70">
                  Join us today and start your SAT journey
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-dark-blue">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`bg-white border-2 text-dark-blue placeholder:text-dark-blue/50 ${
                    errors.name ? 'border-red-500' : 'border-sky-blue/30 focus:border-sky-blue'
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.name && (
                  <p className="text-red-500 text-small">{errors.name}</p>
                )}
              </div>

              {/* Surname Field */}
              <div className="space-y-2">
                <Label htmlFor="surname" className="text-dark-blue">Surname</Label>
                <Input
                  id="surname"
                  type="text"
                  value={formData.surname}
                  onChange={(e) => handleInputChange('surname', e.target.value)}
                  className={`bg-white border-2 text-dark-blue placeholder:text-dark-blue/50 ${
                    errors.surname ? 'border-red-500' : 'border-sky-blue/30 focus:border-sky-blue'
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.surname && (
                  <p className="text-red-500 text-small">{errors.surname}</p>
                )}
              </div>

              {/* Target Score Field */}
              <div className="space-y-2">
                <Label htmlFor="targetScore" className="text-dark-blue">Target Score</Label>
                <Input
                  id="targetScore"
                  type="number"
                  min="400"
                  max="1600"
                  value={formData.targetScore}
                  onChange={(e) => handleInputChange('targetScore', e.target.value)}
                  className={`bg-white border-2 text-dark-blue placeholder:text-dark-blue/50 ${
                    errors.targetScore ? 'border-red-500' : 'border-sky-blue/30 focus:border-sky-blue'
                  }`}
                  placeholder="Enter your target score (400-1600)"
                />
                {errors.targetScore && (
                  <p className="text-red-500 text-small">{errors.targetScore}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-dark-blue">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`bg-white border-2 text-dark-blue placeholder:text-dark-blue/50 ${
                    errors.email ? 'border-red-500' : 'border-sky-blue/30 focus:border-sky-blue'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-small">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-dark-blue">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`bg-white border-2 text-dark-blue placeholder:text-dark-blue/50 pr-10 ${
                      errors.password ? 'border-red-500' : 'border-sky-blue/30 focus:border-sky-blue'
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

              {/* Retype Password Field */}
              <div className="space-y-2">
                <Label htmlFor="retypePassword" className="text-dark-blue">Retype Password</Label>
                <div className="relative">
                  <Input
                    id="retypePassword"
                    type={showRetypePassword ? 'text' : 'password'}
                    value={formData.retypePassword}
                    onChange={(e) => handleInputChange('retypePassword', e.target.value)}
                    className={`bg-white border-2 text-dark-blue placeholder:text-dark-blue/50 pr-10 ${
                      errors.retypePassword ? 'border-red-500' : 'border-sky-blue/30 focus:border-sky-blue'
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

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-sky-blue hover:bg-sky-blue/90 text-white h-12 px-6"
              >
                Create Account
              </Button>

              {/* Additional Info */}
              <p className="text-small text-dark-blue/70 text-center">
                By creating an account, you agree to our terms and conditions.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Register;
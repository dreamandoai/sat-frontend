import { useState } from 'react'
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Label } from '../../../components/Label';
import { ArrowLeft, Users } from 'lucide-react'

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b2dafb] via-[#feefad] to-[rgba(178,218,251,0.8)]">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <button
          className="absolute top-6 left-6 p-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white border border-[rgba(63,163,246,0.2)] text-[#00213e]"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div 
          className="w-full max-w-md p-8 rounded-3xl shadow-2xl backdrop-blur-sm border bg-white border-[rgba(63,163,246,0.2)]"
        >
          <div className="text-center mb-8">
            <div className="p-4 rounded-2xl inline-block mb-4 bg-gradient-to-br from-[#fcda49] to-[#3fa3f6]">
              <Users className="h-8 w-8 text-[#00213e]" />
            </div>
            <h1 className="font-heading font-bold mb-2 text-[28px] text-[#00213e]">
              Teacher Registration
            </h1>
            <p className="text-[16px] text-[rgba(0,33,62,0.7)]">
              Create your admin account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#00213e] text-[16px]">
                First Name
              </Label>
              <Input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="rounded-lg border-2 transition-all duration-300 focus:shadow-lg bg-[#feefad] border-[rgba(63,163,246,0.3)] text-[#00213e] h-12 text-[16px]"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#00213e] text-[16px]">
                Last Name
              </Label>
              <Input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="rounded-lg border-2 transition-all duration-300 focus:shadow-lg bg-[#feefad] border-[rgba(63,163,246,0.3)] text-[#00213e] h-12 text-[16px]"
                placeholder=""
              />
            </div>
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
                className="rounded-lg border-2 transition-all duration-300 focus:shadow-lg bg-[#feefad] border-[rgba(63,163,246,0.3)] text-[#00213e] h-12 text-[16px]"
                placeholder=""
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading || !firstName || !lastName || !email}
              className="w-full font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 bg-[#fcda49] text-[#00213e] h-12 py-4 px-6 text-[16px]"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
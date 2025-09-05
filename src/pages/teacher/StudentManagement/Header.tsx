import React from 'react'
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react'
import { Button } from '../../../components/Button';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate('/teacher/portal');
  }

  return (
    <div className="border-b" style={{ backgroundColor: '#ffffff', borderColor: 'rgba(0, 33, 62, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBack}
              variant="ghost"
              size="sm"
              className="p-2"
              style={{ color: '#00213e' }}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-heading font-bold" style={{ fontSize: '28px', color: '#00213e' }}>
              Students
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;

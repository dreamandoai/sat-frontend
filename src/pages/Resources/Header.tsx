import React from 'react'

import { Button } from '../../components/Button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-[#ffffff] border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <Button
          onClick={() => navigate("/student/portal")}
          variant="ghost"
          size="sm"
          className="hover:bg-[#b2dafb] p-2 rounded-lg"
        >
          <ArrowLeft className="h-5 w-5 text-[#00213e]" />
        </Button>
        <h1 
          className="text-[28px] font-bold text-[#00213e]"
          style={{ fontFamily: 'Montserrat' }}
        >
          SAT Resources Drive
        </h1>
      </div>
    </div>
  )
}

export default Header;
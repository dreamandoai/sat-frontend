import React, { useState } from 'react'

import { Button } from '../../components/Button';
import { ArrowLeft, Upload, Grid3X3, List } from 'lucide-react';
import { useNavigate } from 'react-router';

const Header: React.FC = () => {
  const navigate = useNavigate();
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <Button
          onClick={() => navigate("/student/portal")}
          variant="ghost"
          size="sm"
          className="hover:bg-light-blue/20"
        >
          <ArrowLeft className="h-5 w-5 text-sky-blue" />
        </Button>
        <h1 className="text-2xl font-heading text-dark-blue">SAT Resources</h1>
      </div>
      
      <div className="flex items-center space-x-3">
        <Button 
          className="bg-sky-blue hover:bg-sky-blue/90 text-white"
          size="sm"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload Resource
        </Button>
        
        <div className="flex items-center bg-gray-100 rounded-lg p-1">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            className={`p-2 ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            className={`p-2 ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header;
import React, { useEffect, useState } from 'react'
import Header from './Header';
import LeftPanel from './LeftPanel';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { resourceService } from "../../services/resourceService"
import { setFolderTreeData } from '../../store/resourceSlice';
import type { ApiError } from '../../types/api';
import type { FolderNode } from '../../types/resources';
import RightPanel from './RightPanel';

const FOLDERS = {
  "teacher": "1JTaIkw1JHBHh0Hc20qchKOFNYsORPce7",
  "student": "1jM-TLjnsM8iWwmJy0heneQmi8lr2aap7",
}

const Resources: React.FC = () => {
  const dispatch = useDispatch();
  const { folderTreeData } = useSelector((state: RootState) => state.resource);
  const { user } = useSelector((state: RootState) => state.auth);
  const [selectedFolder, setSelectedFolder] = useState<FolderNode | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetFolderData = async () => {
    if(user) {
      setLoading(true);
      try {
        const response = await resourceService.getSubFolders(FOLDERS[user.role])
        dispatch(setFolderTreeData(response));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (typeof error === 'object' && error !== null && 'message' in error) {
          const apiError = error as ApiError;
          console.log("Error: ", apiError.data.detail);
        } else {
          console.error('Error getting teachers:', error);
        }
      }
    }
  };

  const handleSelectFolder = (node: FolderNode | null) => {
    setSelectedFolder(node);
  }

  useEffect(() => {
    handleGetFolderData();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#ffffff]">
      <Header />
      <div className="flex h-[calc(100vh-4rem)]">
        <div className="border-r border-gray-200">
          <LeftPanel 
            nodes={folderTreeData} 
            selectedFolder={selectedFolder} 
            onSelectFolder={handleSelectFolder}
            loading={loading}
          />
        </div>
        <RightPanel
          selectedFolder={selectedFolder}
          onSelectedFolder={handleSelectFolder}
        />
      </div>
    </div>
  )
}

export default Resources;

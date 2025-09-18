import React, { useEffect, useState } from 'react';
import { Grid3X3, List, Download, Eye, MoreVertical, Folder, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/DropdownMenu';
import type { FolderNode } from '../../types/resources';
import { resourceService } from '../../services/resourceService';
import { useDispatch, useSelector } from 'react-redux';
import { setFilesToShow } from '../../store/resourceSlice';
import type { ApiError } from '../../types/api';
import type { RootState } from '../../store';
import { getFileIcon } from './DriveStyleRow';

interface RightPanelProps {
  selectedFolder: FolderNode | null,
  onSelectedFolder: (folder: FolderNode | null) => void
}

const RightPanel: React.FC<RightPanelProps> = ({ selectedFolder, onSelectedFolder }) => {
  const dispatch = useDispatch();
  const { filesToShow } = useSelector((state: RootState) => state.resource);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState<boolean>(false);
  const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
  const [token, setToken] = useState<string>("");
  const [remainingFolders, setRemainingFolders] = useState<string[] | null>(null);
  const [isShowNextButton, setIsShowNextButton] = useState<boolean>(false);

  useEffect(() => {
    handleGetFilesToShow();
    setToken("");
    setRemainingFolders(null);
    setIsShowNextButton(false);
    setCurrentFolderId(null);
  }, [selectedFolder]);
  
  const handleGetFilesToShow = async () => {
    if(selectedFolder) {
      setLoading(true);
      try {
        const response = await resourceService.getFiles({
          folder_id: currentFolderId ? currentFolderId : selectedFolder.id,
          page_token: token === "" ? undefined : token,
          remaining_folders: remainingFolders ? remainingFolders : undefined
        })
        dispatch(setFilesToShow(response.files));
        const state = response.state;
        if(state.remainingFolders.length > 0 && state.nextPageToken) {
          setIsShowNextButton(true);
          setCurrentFolderId(state.currentFolder);
          setRemainingFolders(state.remainingFolders);
          setToken(state.nextPageToken);
        } else {
          setIsShowNextButton(false);
        }
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
    } else {
      dispatch(setFilesToShow([]));
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[#ffffff]">
      {/* Content Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-[#ffffff] flex items-center justify-between">
        <div className="space-x-3">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="space-x-3">
          <div className="flex items-center bg-gray-100 rounded-lg p-1 gap-2">
            <Button
              size="sm"
              className="p-2 rounded-lg"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              className="p-2 rounded-lg"
              disabled={!isShowNextButton}
              onClick={handleGetFilesToShow}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      {selectedFolder && (
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => onSelectedFolder(null)}
              className="text-[#3fa3f6] hover:text-[#00213e] transition-colors font-medium"
              style={{ fontFamily: 'Poppins' }}
            >
              My Drive
            </button>
            <span className="text-gray-400">/</span>
            <span 
              className="text-[#00213e] font-medium"
              style={{ fontFamily: 'Poppins' }}
            >
              {selectedFolder.name}
            </span>
          </div>
        </div>
      )}

      {/* File Display Area */}
      <div className="flex-1 p-6 overflow-auto bg-[#ffffff]">
        {loading ?
          <div className='w-full h-full flex justify-center items-center'>
            <div className="h-10 w-10 animate-spin rounded-full border-1 border-[#00213e] border-t-transparent">
            </div>
          </div> : 
        filesToShow.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Folder className="h-16 w-16 text-gray-300 mb-4" />
            <h3 
              className="text-lg font-medium text-[#00213e] mb-2"
              style={{ fontFamily: 'Montserrat' }}
            >
              {selectedFolder ? 'Folder is empty' : 'No files to show'}
            </h3>
            <p 
              className="text-gray-500 max-w-md"
              style={{ fontFamily: 'Poppins' }}
            >
              {selectedFolder 
                ? 'Drag files here or use the upload button to add files.'
                : 'Select a folder to view its contents.'
              }
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {filesToShow.map((file) => (
              <div
                key={file.id}
                className="group cursor-pointer p-4 rounded-lg border border-gray-200 hover:border-[#3fa3f6] hover:shadow-md transition-all duration-200 bg-[#ffffff]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 p-4 bg-gray-50 rounded-lg group-hover:bg-[#b2dafb]/20 transition-colors">
                    {getFileIcon(file.fileType)}
                  </div>
                  
                  <h4 
                    className="font-medium text-[#00213e] text-sm mb-1 line-clamp-2 group-hover:text-[#3fa3f6] transition-colors"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {file.name}
                  </h4>
                  
                  <div 
                    className="text-xs text-gray-500 space-y-1"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {file.size && <p>{file.size}</p>}
                    {file.uploadedDate && (
                      <p>{new Date(file.uploadedDate).toLocaleDateString()}</p>
                    )}
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-[#b2dafb]/30"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-lg">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        Open
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-1">
            {filesToShow.map((file) => (
              <div
                key={file.id}
                className="group flex items-center px-4 py-3 rounded-lg hover:bg-[#b2dafb]/20 cursor-pointer transition-colors border border-transparent hover:border-[#3fa3f6]/30"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="flex-shrink-0">
                    {getFileIcon(file.fileType)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 
                      className="font-medium text-[#00213e] truncate group-hover:text-[#3fa3f6] transition-colors"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      {file.name}
                    </h4>
                    <div 
                      className="flex items-center space-x-3 text-sm text-gray-500"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      {file.uploadedDate && (
                        <span>Modified {new Date(file.uploadedDate).toLocaleDateString()}</span>
                      )}
                      {file.size && (
                        <span>{file.size}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-[#b2dafb]/30"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-lg">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      Open
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
        )}
        
      </div>
    </div>
  )
}

export default RightPanel;
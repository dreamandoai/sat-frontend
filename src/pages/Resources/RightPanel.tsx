import React, { useState } from 'react';
import { Search, Grid3X3, List, Download, Eye, MoreVertical, Folder } from 'lucide-react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/DropdownMenu';
import type { TreeNode } from './FolderTreeNode';

interface RightPanelProps {
  node: TreeNode
}

const RightPanel: React.FC<RightPanelProps> = ({ node }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[#ffffff]">
      {/* Content Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-[#ffffff] flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Search Bar - moved to header per Google Drive spec */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search files"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-96 bg-gray-50 border-gray-200 focus:border-[#3fa3f6] focus:ring-[#3fa3f6]/20 rounded-lg"
              style={{ height: '40px' }}
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
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
      </div>

      {/* Breadcrumb Bar */}
      {node && (
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => onSelectNode(null)}
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
              {node.name}
            </span>
            <span 
              className="text-gray-500 ml-4"
              style={{ fontFamily: 'Poppins' }}
            >
              {filteredFiles.length} {filteredFiles.length === 1 ? 'item' : 'items'}
            </span>
          </div>
        </div>
      )}

      {/* File Display Area */}
      <div className="flex-1 p-6 overflow-auto bg-[#ffffff]">
        {filteredFiles.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Folder className="h-16 w-16 text-gray-300 mb-4" />
            <h3 
              className="text-lg font-medium text-[#00213e] mb-2"
              style={{ fontFamily: 'Montserrat' }}
            >
              {searchQuery ? 'No results found' : selectedNode ? 'Folder is empty' : 'No files to show'}
            </h3>
            <p 
              className="text-gray-500 max-w-md"
              style={{ fontFamily: 'Poppins' }}
            >
              {searchQuery 
                ? `Try searching for something else`
                : selectedNode 
                ? 'Drag files here or use the upload button to add files.'
                : 'Select a folder to view its contents.'
              }
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {filteredFiles.map((file) => (
              <div
                key={file.id}
                className="group cursor-pointer p-4 rounded-lg border border-gray-200 hover:border-[#3fa3f6] hover:shadow-md transition-all duration-200 bg-[#ffffff]"
                onClick={() => handleFileOpen(file)}
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
                    {file.uploadDate && (
                      <p>{new Date(file.uploadDate).toLocaleDateString()}</p>
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
                      <DropdownMenuItem onClick={() => handleFileOpen(file)}>
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
            {filteredFiles.map((file) => (
              <div
                key={file.id}
                className="group flex items-center px-4 py-3 rounded-lg hover:bg-[#b2dafb]/20 cursor-pointer transition-colors border border-transparent hover:border-[#3fa3f6]/30"
                onClick={() => handleFileOpen(file)}
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
                      {file.uploadDate && (
                        <span>Modified {new Date(file.uploadDate).toLocaleDateString()}</span>
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
                    <DropdownMenuItem onClick={() => handleFileOpen(file)}>
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
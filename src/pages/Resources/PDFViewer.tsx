import React, { useState, useEffect } from 'react'
import type { FileNode } from '../../types/resources'
import { getFileIcon } from './DriveStyleRow'
import { Button } from '../../components/Button'
import { X, Brush, Type, Edit3, Save, StickyNote, Download, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react'
import { formatFileSize } from '../../utils/formatters';

interface PDFViewerProps {
  file: FileNode
  onClose: () => void
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file, onClose }) => {

  const [notes, setNotes] = useState<string>('');
  const [zoom, setZoom] = useState<number>(100);
  const [rotation, setRotation] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMethod, setViewMethod] = useState<'iframe' | 'embed' | 'object' | 'download'>('iframe');

  const handleClosePDFViewer = () => {
    onClose();
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 300));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file.downloadLink;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Convert Google Drive view link to embeddable format
  const getEmbeddableUrl = () => {
    // Convert from view link to embed link
    const fileId = file.viewLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)?.[1];
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return file.viewLink;
  };

  // Get direct PDF URL for object/embed tags
  const getDirectPdfUrl = () => {
    const fileId = file.viewLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)?.[1];
    if (fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
    return file.downloadLink;
  };

  // Handle iframe error and try alternative methods
  const handleIframeError = () => {
    if (viewMethod === 'iframe') {
      setViewMethod('embed');
    } else if (viewMethod === 'embed') {
      setViewMethod('object');
    } else if (viewMethod === 'object') {
      setViewMethod('download');
      setError('PDF cannot be displayed inline. Please download to view.');
    }
  };

  // Reset to iframe when file changes
  React.useEffect(() => {
    setViewMethod('iframe');
    setError(null);
    setIsLoading(true);
  }, [file.id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Load saved notes when component mounts
  useEffect(() => {
    const savedNotes = localStorage.getItem(`pdf-notes-${file.id}`);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [file.id]);

  return (
    <div className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-4 bg-[#ffffff] rounded-lg shadow-2xl flex flex-col">
        {/* PDF Viewer Header */}
        <div className="h-14 flex items-center justify-between px-6 border-b border-[#b2dafb]/30 bg-[#feefad]/10">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#b2dafb]/20 rounded-lg">
              {getFileIcon(file.fileType)}
            </div>
            <div>
              <h2 
                className="text-lg font-semibold text-[#00213e]"
                style={{ fontFamily: 'Montserrat' }}
              >
                {file.name}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span style={{ fontFamily: 'Poppins' }}>
                  {formatFileSize(file.size)}
                </span>
                <span style={{ fontFamily: 'Poppins' }}>
                  {formatDate(file.uploadedDate)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(file.viewLink, '_blank')}
              className="h-8 px-3 hover:bg-[#b2dafb]/20 rounded-lg"
            >
              Open in New Tab
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="h-8 px-3 hover:bg-[#b2dafb]/20 rounded-lg"
            >
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClosePDFViewer}
              className="h-8 w-8 p-0 hover:bg-[#b2dafb]/20 rounded-lg"
            >
              <X className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* PDF Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Toolbar */}
            <div className="h-12 bg-[#feefad]/20 border-b border-[#b2dafb]/20 flex items-center px-4 space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:bg-[#b2dafb]/20 rounded-lg"
                style={{ fontFamily: 'Poppins' }}
              >
                <Brush className="h-4 w-4 mr-2 text-[#3fa3f6]" />
                Highlight
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:bg-[#b2dafb]/20 rounded-lg"
                style={{ fontFamily: 'Poppins' }}
              >
                <Type className="h-4 w-4 mr-2 text-[#3fa3f6]" />
                Add Text
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:bg-[#b2dafb]/20 rounded-lg"
                style={{ fontFamily: 'Poppins' }}
              >
                <Edit3 className="h-4 w-4 mr-2 text-[#3fa3f6]" />
                Draw
              </Button>
              
              <div className="w-px h-6 bg-[#b2dafb]/30 mx-2" />
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleZoomOut}
                className="hover:bg-[#b2dafb]/20 rounded-lg"
                disabled={zoom <= 50}
              >
                <ZoomOut className="h-4 w-4 text-[#3fa3f6]" />
              </Button>
              <span className="text-sm text-[#00213e] min-w-[3rem] text-center" style={{ fontFamily: 'Poppins' }}>
                {zoom}%
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleZoomIn}
                className="hover:bg-[#b2dafb]/20 rounded-lg"
                disabled={zoom >= 300}
              >
                <ZoomIn className="h-4 w-4 text-[#3fa3f6]" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleRotate}
                className="hover:bg-[#b2dafb]/20 rounded-lg"
              >
                <RotateCcw className="h-4 w-4 text-[#3fa3f6]" />
              </Button>
              
              <div className="w-px h-6 bg-[#b2dafb]/30 mx-2" />
              
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500" style={{ fontFamily: 'Poppins' }}>
                  View:
                </span>
                <select
                  value={viewMethod}
                  onChange={(e) => setViewMethod(e.target.value as any)}
                  className="text-xs border border-[#b2dafb]/30 rounded px-2 py-1 bg-white"
                  style={{ fontFamily: 'Poppins' }}
                >
                  <option value="iframe">Iframe</option>
                  <option value="embed">Embed</option>
                  <option value="object">Object</option>
                  <option value="download">Download Only</option>
                </select>
              </div>
              
              <div className="flex-1" />
              <Button 
                size="sm" 
                className="bg-[#3fa3f6] hover:bg-[#3fa3f6]/90 text-white rounded-lg"
                style={{ fontFamily: 'Poppins' }}
              >
                <Save className="h-4 w-4 mr-2" />
                Save Progress
              </Button>
            </div>

            {/* PDF Viewer Area */}
            <div className="flex-1 bg-gray-100 p-4 overflow-auto">
              <div className="max-w-6xl mx-auto bg-[#ffffff] shadow-lg rounded-lg overflow-hidden">
                {isLoading && (
                  <div className="flex items-center justify-center h-96">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3fa3f6] mx-auto mb-4"></div>
                      <p className="text-gray-600" style={{ fontFamily: 'Poppins' }}>
                        Loading PDF...
                      </p>
                    </div>
                  </div>
                )}
                
                {error && viewMethod === 'download' && (
                  <div className="flex items-center justify-center h-96">
                    <div className="text-center">
                      <div className="text-red-500 text-6xl mb-4">⚠️</div>
                      <h3 className="text-lg font-semibold text-[#00213e] mb-2" style={{ fontFamily: 'Montserrat' }}>
                        PDF Cannot Be Displayed Inline
                      </h3>
                      <p className="text-gray-600 mb-4" style={{ fontFamily: 'Poppins' }}>
                        Due to security restrictions, this PDF cannot be displayed directly in the browser.
                      </p>
                      <div className="space-x-4">
                        <Button 
                          onClick={handleDownload}
                          className="bg-[#3fa3f6] hover:bg-[#3fa3f6]/90 text-white"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button 
                          onClick={() => window.open(file.viewLink, '_blank')}
                          variant="outline"
                        >
                          Open in New Tab
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* PDF Content based on view method */}
                {!error && (
                  <div 
                    className="w-full h-full min-h-[600px]"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transformOrigin: 'center',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    {viewMethod === 'iframe' && (
                      <iframe
                        src={`${getEmbeddableUrl()}#toolbar=1&navpanes=1&scrollbar=1&zoom=${zoom}&view=FitH`}
                        className="w-full h-full min-h-[600px]"
                        onLoad={() => {
                          setIsLoading(false);
                          setError(null);
                        }}
                        onError={handleIframeError}
                        title={file.name}
                      />
                    )}
                    
                    {viewMethod === 'embed' && (
                      <embed
                        src={getDirectPdfUrl()}
                        type="application/pdf"
                        className="w-full h-full"
                        onLoad={() => {
                          setIsLoading(false);
                          setError(null);
                        }}
                        onError={handleIframeError}
                      />
                    )}
                    
                    {viewMethod === 'object' && (
                      <object
                        data={getDirectPdfUrl()}
                        type="application/pdf"
                        className="w-full h-full"
                        onLoad={() => {
                          setIsLoading(false);
                          setError(null);
                        }}
                        onError={handleIframeError}
                      >
                        <p className="text-center text-gray-600 p-8">
                          Your browser does not support PDF display. 
                          <button 
                            onClick={handleDownload}
                            className="text-[#3fa3f6] hover:underline ml-1"
                          >
                            Click here to download
                          </button>
                        </p>
                      </object>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Notes Panel */}
          <div className="w-80 bg-[#feefad]/10 border-l border-[#b2dafb]/20 flex flex-col">
            <div className="h-12 flex items-center px-4 border-b border-[#b2dafb]/20 bg-white/50">
              <StickyNote className="h-4 w-4 mr-2 text-[#3fa3f6]" />
              <h3 className="font-medium text-[#00213e]">
                Notes & Comments
              </h3>
            </div>
            
            <div className="flex-1 p-4">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add your notes and comments here..."
                className="w-full h-full resize-none border border-[#b2dafb]/30 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3fa3f6] focus:border-[#3fa3f6] bg-[#ffffff]"
              />
            </div>
            
            <div className="p-4 border-t border-[#b2dafb]/20">
              <Button 
                size="sm" 
                onClick={() => {
                  // Here you would typically save to localStorage or send to API
                  localStorage.setItem(`pdf-notes-${file.id}`, notes);
                  // You could also show a toast notification here
                }}
                className="w-full bg-[#3fa3f6] hover:bg-[#3fa3f6]/90 text-white rounded-lg"
                style={{ fontFamily: 'Poppins' }}
              >
                Save Notes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PDFViewer
export interface FolderNode {
  id: string
  name: string
  type: 'folder' | 'file'
  hasChildren: boolean
  children?: FolderNode[]  
}

export interface FileNode{
  id: string
  name: string
  size: number,
  viewLink: string,
  downloadLink: string
}

export interface GetFilsResponse {
  files: FileNode[],
  state: {
    currentFolder: string,
    nextPageToken: string,
    remainingFolders: string[]
  }
}
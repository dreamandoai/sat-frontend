import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FolderNode } from '../types/resources';

interface ResourceState {
  folderTreeData: FolderNode[] 
}

const initialState: ResourceState = {
  folderTreeData: [],
};

const resourceSlice = createSlice({
  name: 'resource',
  initialState,
  reducers: {
    setFolderTreeData: ( state, action: PayloadAction<FolderNode[]> ) => {
      state.folderTreeData = action.payload
    },
  },
});

export const { setFolderTreeData } = resourceSlice.actions;

export default resourceSlice.reducer;
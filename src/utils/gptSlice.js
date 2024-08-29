// gptSlice.js (or wherever your Redux slice file is)
import { createSlice } from '@reduxjs/toolkit';

export const gptSlice = createSlice({
  name: 'search',
  initialState: {
    showSearch: false,
  },
  reducers: {
    toggleShowSearch: (state, action) => {
      state.showSearch = action.payload;
    },
  },
});

export const { toggleShowSearch } = gptSlice.actions;

export default gptSlice.reducer;

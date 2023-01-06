import { createSlice } from "@reduxjs/toolkit";

export {};

interface State {
  isDrawerOpen: boolean
}

const initialState: State = {
  isDrawerOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isDrawerOpen = true; 
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false; 
    },
  },
});

export const { closeDrawer, openDrawer } = uiSlice.actions;
export default uiSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: true,
};

const visibilitySlice = createSlice({
  name: "visibility", // name of the slice
  initialState,
  reducers: {
    show: (state) => {
      state.isVisible = true;
    },
    hide: (state) => {
      state.isVisible = false;
    },
    toggle: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

// Export actions to use in components
export const { show, hide, toggle } = visibilitySlice.actions;

// Export reducer to add to store
export default visibilitySlice.reducer;

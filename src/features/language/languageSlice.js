import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLanguage: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.activeLanguage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;

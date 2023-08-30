import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../i18n";

const initialState = {
  activeLanguage: i18n.language,
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

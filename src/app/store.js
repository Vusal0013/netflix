import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "../features/language/languageSlice";

export const store = configureStore({
  reducer: {
    language: languageSlice,
  },
});

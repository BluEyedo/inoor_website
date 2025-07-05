import { createSlice } from "@reduxjs/toolkit";

const langToggle = createSlice({
  name: "lang-toggle",
  initialState: {
    value: "en",
  },
  reducers: {
    arabicSwitch: (state) => {
      state.value = "ar";
    },
    englishSwitch: (state) => {
      state.value = "en";
    },
  },
});

export const { arabicSwitch, englishSwitch } = langToggle.actions;
export const lang = (store: any) => store.lang;
export default langToggle.reducer;

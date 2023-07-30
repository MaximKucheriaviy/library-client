import { createSlice } from "@reduxjs/toolkit";

export const customLoadingSlice = createSlice({
  name: "Loading",
  initialState: {
    value: false,
  },
  reducers: {
    enable(state) {
      state.value = true;
    },
    disable(state) {
      state.value = false;
    },
  },
});

export const { enable, disable } = customLoadingSlice.actions;

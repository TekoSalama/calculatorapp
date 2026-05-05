import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "../features/calculator/calcSlice"
export const calcStore = configureStore({
  reducer: {
    calc: calcReducer,
  },
});

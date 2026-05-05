import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    addition: (state, action) => {
      const { firstNumber, secoundNumber } = action.payload;
      state.result = Number(firstNumber) + Number(secoundNumber);
    },
    subtraction: (state, action) => {
      const { firstNumber, secoundNumber } = action.payload;
      state.result = Number(firstNumber) - Number(secoundNumber);
    },
    multiplication: (state, action) => {
      const { firstNumber, secoundNumber } = action.payload;
      state.result = Number(firstNumber) * Number(secoundNumber);
    },
    division: (state, action) => {
      const { firstNumber, secoundNumber } = action.payload;
      state.result = Number(firstNumber) / Number(secoundNumber);
    },
  },
});

export default calcSlice.reducer;

export const { addition, subtraction, multiplication, division} = calcSlice.actions;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};
type PayloadType = {
  firstNumber: number;
  secoundNumber: number;
};
export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    addition: (state, action: PayloadAction<PayloadType>) => {
      const { firstNumber, secoundNumber } = action.payload;
      state.result = Number(firstNumber) + Number(secoundNumber);
    },
    subtraction: (state, action: PayloadAction<PayloadType>) => {
      const { firstNumber, secoundNumber } = action.payload;
      state.result = Number(firstNumber) - Number(secoundNumber);
    },
    multiplication: (state, action: PayloadAction<PayloadType>) => {
      const { firstNumber, secoundNumber } = action.payload;
      state.result = Number(firstNumber) * Number(secoundNumber);
    },
    division: (state, action: PayloadAction<PayloadType>) => {
      const { firstNumber, secoundNumber } = action.payload;
      state.result = Number(firstNumber) / Number(secoundNumber);
    },
  },
});

export default calcSlice.reducer;

export const { addition, subtraction, multiplication, division } =
  calcSlice.actions;

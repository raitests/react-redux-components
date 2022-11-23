import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showData: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; //this is immutable internally although it looks like mutable code
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showData = !state.showData;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;

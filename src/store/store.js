import { createStore } from "redux";
const initState = { counter: 0, showData: true };
const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, showData: state.showData };
    case "DECREMENT":
      return { counter: state.counter - 1, showData: state.showData };
    case "INCREASE":
      return {counter: state.counter + action.amount, showData: state.showData};
    case "TOGGLE":
      return { showData: !state.showData, counter: state.counter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;

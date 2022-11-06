import { Action } from "redux";

const initState = {
  count: 0,
};

export default function counterReducer(state = initState, action: Action) {
  switch (action.type) {
    case "counter/plus":
      return { ...state, count: state.count + 1 };
    case "counter/minus":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

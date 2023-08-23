import { SET_QUOTE } from "../constants";

export const quoteReducer = (state = "", action) => {
  if (action.type === SET_QUOTE) {
    return action.quote;
  }
  return state;
}

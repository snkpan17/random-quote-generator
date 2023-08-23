import { SET_AUTHOR } from "../constants";

export const authorReducer = (state = "", action) => {
  if (action.type === SET_AUTHOR) {
    return action.author;
  }
  return state;
}

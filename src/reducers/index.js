import { combineReducers } from "redux";
import { quoteReducer } from "./quote";
import { authorReducer } from "./author";

export default combineReducers({ quote: quoteReducer, author: authorReducer });

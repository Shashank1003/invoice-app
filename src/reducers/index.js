import invoiceData from "./invoiceData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  invoiceDataReducer: invoiceData
});

export default allReducers;

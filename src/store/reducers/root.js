import { combineReducers } from "redux";
import {interfaceData} from "./interface-data/interface-data";
import {numbersData} from "./numbers-data/numbers-data";

export const NameSpace = {
  INTERFACE: "INTERFACE",
  NUMBERS: "NUMBERS"
};

export default combineReducers({
  [NameSpace.INTERFACE]: interfaceData,
  [NameSpace.NUMBERS]: numbersData,
});
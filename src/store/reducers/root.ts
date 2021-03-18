import { combineReducers } from "redux";
import { appInterfaceData } from "./app-interface-data/app-interface-data";
import { numbersData } from "./numbers-data/numbers-data";

export const NameSpace = {
  INTERFACE: "INTERFACE",
  NUMBERS: "NUMBERS"
};

export default combineReducers({
  [NameSpace.INTERFACE]: appInterfaceData,
  [NameSpace.NUMBERS]: numbersData,
});
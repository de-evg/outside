import { combineReducers } from "redux";
import {interfaceData} from "./interface/interface";

export const NameSpace = {
  INTERFACE: "INTERFACE"
};

export default combineReducers({
  [NameSpace.INTERFACE]: interfaceData,
});
import { Reducer } from "redux";
import {ActionType} from "../../action";

interface IInterfaceState {
  readonly isTaxPopupShowed: boolean;
  readonly decreaseBy: string;
};

export interface IAppInterfaceState {
  readonly numbersState: IInterfaceState
};

const DEFAULT_DECREASE = "payment";

const initialState = {
  isTaxPopupShowed: false,
  decreaseBy: DEFAULT_DECREASE
};

export const appInterfaceData: Reducer<IInterfaceState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_POPUP:
      return {...state, isTaxPopupShowed: !state.isTaxPopupShowed}
    case ActionType.TOGGLE_DECREASE:
        return {...state, decreaseBy: action.payload}      
    case ActionType.RESET_DECREASE: 
      return {...state, decreaseBy: DEFAULT_DECREASE}
    default: return state;
  };
};
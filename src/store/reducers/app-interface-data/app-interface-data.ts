import { Reducer } from "redux";
import { ActionType } from "../../action";

interface IInterfaceState {
  readonly isTaxPopupShowed: boolean;
  readonly decreaseBy: string;
  readonly isStartPopupShowed: boolean;
  readonly isResultShowed: boolean;
};

const DEFAULT_DECREASE = "payment";

const initialState = {
  isStartPopupShowed: true,
  isTaxPopupShowed: false,
  isResultShowed: false,
  decreaseBy: DEFAULT_DECREASE
};

export const appInterfaceData: Reducer<IInterfaceState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_POPUP:
      return { ...state, isTaxPopupShowed: !state.isTaxPopupShowed, isStartPopupShowed: !state.isStartPopupShowed }
    case ActionType.SHOW_RESULT:
      return { ...state, isStartPopupShowed: false, isTaxPopupShowed: false, isResultShowed: true }
    case ActionType.RETURN_ON_START:
      return { ...state, isStartPopupShowed: true, isTaxPopupShowed: false, isResultShowed: false }
    case ActionType.TOGGLE_DECREASE:
      return { ...state, decreaseBy: action.payload }
    case ActionType.RESET_DECREASE:
      return { ...state, decreaseBy: DEFAULT_DECREASE }

    default: return state;
  };
};
import {ActionType} from "../../action";

const initialState = {
  isStartPopupShowed: false
};

export const interfaceData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_POPUP:
      return {...state, isTaxPopupShowed: !state.isTaxPopupShowed}

    default: return state;
  };
};
import {ActionType} from "../../action";

const initialState = {
  isStartPopupShowed: true
};

export const interfaceData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.HIDE_START_POPUP:
      return {...state, isStartPopupShowed: false}

    default: return state;
  };
};
import {ActionType} from "../../action";

const DEFAULT_COST = 2000000;

const initialState = {
  costOfRealty: DEFAULT_COST
};

export const numbersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_POPUP:
      return {...state, costOfRealty: !state.isTaxPopupShowed}

    default: return state;
  };
};
import { ActionCreator } from "redux";

export const ActionType = {
  TOGGLE_POPUP: "TOGGLE_POPUP",
  UPDATE_SALARY: "UPDATE_SALARY",
  TOGGLE_DECREASE: "TOGGLE_DECREASE",
  RESET_DECREASE: "RESET_DECREASE",
  RESET_NUMBERS: "RESET_NUMBERS"
};

export interface IToggleAction {
  type: string
};

export interface IResetAction {
  type: string
};

export interface IUpdateSalaryAction {
  type: string;
  payload: number;
};

export interface IToggleDecreaseAction {
  type: string,
  payload: string
};

export type StateActions =
  | IToggleAction
  | IUpdateSalaryAction
  | IToggleDecreaseAction

export const togglePopup: ActionCreator<IToggleAction> = () => ({
  type: ActionType.TOGGLE_POPUP,
});

export const resetDecrease: ActionCreator<IResetAction> = () => ({
  type: ActionType.RESET_DECREASE,
});

export const resetNumbers: ActionCreator<IResetAction> = () => ({
  type: ActionType.RESET_NUMBERS,
});

export const updateSalary: ActionCreator<IUpdateSalaryAction> = (salary) => ({
  type: ActionType.UPDATE_SALARY,
  payload: salary
});

export const toggleDecrease: ActionCreator<IToggleDecreaseAction> = (decrease) => ({
  type: ActionType.TOGGLE_DECREASE,
  payload: decrease
});

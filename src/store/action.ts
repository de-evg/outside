import { ActionCreator } from "redux";

export const ActionType = {
  TOGGLE_POPUP: "TOGGLE_POPUP",
  UPDATE_SALARY: "UPDATE_SALARY",
  TOGGLE_DECREASE: "TOGGLE_DECREASE",
  RESET_DECREASE: "RESET_DECREASE",
  RESET_NUMBERS: "RESET_NUMBERS",
  RESET_PAYMENTS: "RESET_PAYMENTS",
  ADD_PAYMENT_BY_YEAR: "ADD_PAYMENT_BY_YEAR",
  REMOVE_PAYMENT_BY_YEAR: "REMOVE_PAYMENT_BY_YEAR",
  SHOW_RESULT: "SHOW_RESULT",
  RETURN_ON_START: "RETURN_ON_START"
};

export interface IToggleAction {
  type: string
};

export const togglePopup: ActionCreator<IToggleAction> = () => ({
  type: ActionType.TOGGLE_POPUP,
});

export const showResult: ActionCreator<IToggleAction> = () => ({
  type: ActionType.SHOW_RESULT,
});

export const returnOnStartPage: ActionCreator<IToggleAction> = () => ({
  type: ActionType.RETURN_ON_START,
});


export interface IResetAction {
  type: string
};

export const resetDecrease: ActionCreator<IResetAction> = () => ({
  type: ActionType.RESET_DECREASE,
});

export const resetNumbers: ActionCreator<IResetAction> = () => ({
  type: ActionType.RESET_NUMBERS,
});

export const resetPayments: ActionCreator<IResetAction> = () => ({
  type: ActionType.RESET_PAYMENTS,
});

export interface IUpdateSalaryAction {
  type: string;
  payload: number;
};

export const updateSalary: ActionCreator<IUpdateSalaryAction> = (salary) => ({
  type: ActionType.UPDATE_SALARY,
  payload: salary
});

export interface IToggleDecreaseAction {
  type: string,
  payload: string
};

export const toggleDecrease: ActionCreator<IToggleDecreaseAction> = (decrease) => ({
  type: ActionType.TOGGLE_DECREASE,
  payload: decrease
});

export interface IAddPaymentAction {
  type: string,
  payload: { [x: string]: number }
};

export const addPaymentByYear: ActionCreator<IAddPaymentAction> = (paymentByYear) => ({
  type: ActionType.ADD_PAYMENT_BY_YEAR,
  payload: paymentByYear
});

export interface IRemovePaymentAction {
  type: string,
  payload: { [x: string]: number }
};

export const removePaymentByYear: ActionCreator<IRemovePaymentAction> = (paymentByYear) => ({
  type: ActionType.REMOVE_PAYMENT_BY_YEAR,
  payload: paymentByYear
});

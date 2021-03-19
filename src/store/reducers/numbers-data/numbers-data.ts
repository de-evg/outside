import { Reducer } from "redux";
import { ActionType } from "../../action";

const DEFAULT_COST = 2000000;
const TAX_RATE = 0.13;
const DEFAULT_SALARY = 0;
const INTERVAL_BY_MONTHS = 12;

interface INumbersState {
  readonly costOfRealty: number;
  readonly salary: number;
  readonly taxOfRealty: number;
  readonly taxOfSalary: number;
  readonly paymentByYears: { [x: string]: number } | null;
};

export interface IAppNumbersState {
  readonly numbersState: INumbersState
};

const updateTaxOfSalary = (salary: number) => {
  return salary * INTERVAL_BY_MONTHS * TAX_RATE;
};

const initialState = {
  costOfRealty: DEFAULT_COST,
  taxOfRealty: DEFAULT_COST * TAX_RATE,
  salary: DEFAULT_SALARY,
  taxOfSalary: updateTaxOfSalary(DEFAULT_SALARY),
  paymentByYears: null
};

export const numbersData: Reducer<INumbersState> = (state = initialState, action) => {
  let key;
  let { paymentByYears } = state;
  switch (action.type) {
    case ActionType.UPDATE_SALARY:
      const taxOfSalary = updateTaxOfSalary(action.payload);
      return { ...state, salary: action.payload, taxOfSalary }
    case ActionType.RESET_NUMBERS:
      return {
        ...state, costOfRealty: DEFAULT_COST,
        taxOfRealty: DEFAULT_COST * TAX_RATE,
        salary: DEFAULT_SALARY,
        taxOfSalary: updateTaxOfSalary(DEFAULT_SALARY),
        paymentByYears: null
      }
    case ActionType.RESET_PAYMENTS:
      return {
        ...state,
        paymentByYears: null
      }
    case ActionType.ADD_PAYMENT_BY_YEAR:
      key = Object.keys(action.payload)[0];
      if (!state.paymentByYears) {
        return { ...state, paymentByYears: action.payload }
      }
      const isPaymentInState = !!state.paymentByYears[key];
      if (isPaymentInState) {
        const { paymentByYears } = state;
        delete paymentByYears![key];
        return { ...state, paymentByYears: paymentByYears }
      }
      paymentByYears![key] = action.payload[key];
      return { ...state, paymentByYears }

    case ActionType.REMOVE_PAYMENT_BY_YEAR:
      key = Object.keys(action.payload)[0];
      delete paymentByYears![key];
      return { ...state, paymentByYears: paymentByYears }


    default: return state;
  };
};
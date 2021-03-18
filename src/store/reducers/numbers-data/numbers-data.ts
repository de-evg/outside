import { Reducer } from "redux";
import { ActionType } from "../../action";

const DEFAULT_COST = 2000000;
const TAX_RATE = 0.13;
const DEFAULT_SALARY = 0;
const INTERVAL_BY_MONTHS = 12;

interface INumbersState {
  readonly costOfRealty: number;
  readonly salary: number;
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
  taxOfSalary: updateTaxOfSalary(DEFAULT_SALARY)
};

export const numbersData: Reducer<INumbersState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_SALARY:
      const taxOfSalary = updateTaxOfSalary(action.payload);
      return { ...state, salary: action.payload, taxOfSalary }
    case ActionType.RESET_NUMBERS:
      return {
        ...state, costOfRealty: DEFAULT_COST,
        taxOfRealty: DEFAULT_COST * TAX_RATE,
        salary: DEFAULT_SALARY,
        taxOfSalary: updateTaxOfSalary(DEFAULT_SALARY)
      }
    default: return state;
  };
};
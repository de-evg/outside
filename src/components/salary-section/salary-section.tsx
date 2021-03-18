import * as React from "react";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import styled from "styled-components";
import { updateSalary } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";

const MAX_YEARS = 30;

const Container = styled.form`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

interface LabelProps {
  htmlFor: string
};

const Label = styled.label.attrs<LabelProps>(({ htmlFor }: LabelProps) => ({
  htmlFor
}))`
  margin-bottom: 8px;

  color: #000000;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

interface InputProps {
  placeholder: string,
  id: string,
  type: string,
  value: number
}

const Input = styled.input.attrs<InputProps>(({ placeholder, id, type }: InputProps) => ({
  placeholder,
  id,
  type
}))`
  margin-bottom: 8px;  
  border: 1px solid #DFE3E6;
  padding: 7px 10px;
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

interface ButtonProps {
  children: string,
  disabled: boolean,
  onClick: () => void,
}

const CalculateBtn = styled.button.attrs<ButtonProps>(({
  children,
  disabled,
  onClick
}: ButtonProps) => ({
  children,
  disabled,
  onClick
}))`
  padding: 0;
  display: flex;  
  align-self: flex-start;  
  border: none;
  background: transparent;
  color: #EA0029;
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  &:hover {
    color: #F53A31;
  }
  &:active {
    color: #EA0029;
  }
  &:disabled {
    color: #EA0029;
  }
`;

interface SalaryFormProps {
  salary: number;
  taxOfRealty: number;
  taxOfSalary: number;
};

interface SalaryFormActionProps {
  setInputValue: any;
};

const SalaryForm: React.FC<SalaryFormProps & SalaryFormActionProps> = ({ setInputValue, taxOfRealty }: SalaryFormProps & SalaryFormActionProps) => {
  const [_value, setValue] = React.useState(0);
  const [_isBtnDisabled, setBtnStatus] = React.useState(true);

  React.useEffect(() => {
    const yearsForPayment = Math.ceil(taxOfRealty / _value * 12 * 0.13);
    if (yearsForPayment <= MAX_YEARS) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  }, [_value, setBtnStatus, taxOfRealty]);

  const handleInputChange = React.useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+evt.currentTarget.value);
  }, [setValue]);

  const handleCalculateBtnClick = React.useCallback((evt) => {
    evt.preventDefault();
    setInputValue(_value);
  }, [setInputValue, _value]);

  return (
    <Container>
      <Label htmlFor="input-salary">Ваша зарплата в месяц</Label>
      <Input type="number" id="input-salary" placeholder={"Введите данные"} value={_value ? _value : ""} onChange={handleInputChange} />
      <CalculateBtn onClick={handleCalculateBtnClick} disabled={_isBtnDisabled} >Рассчитать</CalculateBtn>
    </Container>
  );
};

interface ITaxFormState {
  [x: string]: {
    salary: number;
    taxOfRealty: number;
    taxOfSalary: number;
  }
};

const mapStateToProps = (state: ITaxFormState) => ({
  salary: state[NameSpace.NUMBERS].salary,
  taxOfRealty: state[NameSpace.NUMBERS].taxOfRealty,
  taxOfSalary: state[NameSpace.NUMBERS].taxOfSalary,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  setInputValue(value: { value: string }) {
    dispatch(updateSalary(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SalaryForm);

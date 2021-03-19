import * as React from "react";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import styled from "styled-components";
import { updateSalary, resetPayments } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";

const MAX_YEARS = 30;
const TAX_RATE = 0.13;
const INTERVAL_BY_MONTHS = 12;
const CharCode = {
  ENTER: 13
};


const Container = styled.div`
  margin-bottom: 16px;  
  position: relative;
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
  value: number,
  style?: object
  ref: object
};

const Input = styled.input.attrs<InputProps>(({ placeholder, id, type, style, value, ref }: InputProps) => ({
  placeholder,
  id,
  type,
  style,
  value,
  ref
}))`
  margin-bottom: 8px;  
  border: 1px solid #DFE3E6;
  padding: 7px 10px;
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  &:focus {
    border-color: #DFE3E6;
  }
  &:hover {
    border-color: #000000;
  }
  &:error {
    border-color: #EA0029;
  }
  &:invalid+p {
    diplay: block;
  }
`;

const MessageOnInvalidInput = styled.p`
  margin: 0;
  diplay: none;
  position: absolute;
  bottom: 20px;
  left: 0;
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #EA0029;
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

interface ISalaryFormProps {
  salary: number;
  taxOfRealty: number;
  taxOfSalary: number;
  setInputValue: any;
};

const SalaryForm: React.FC<ISalaryFormProps> = ({ setInputValue, taxOfRealty }: ISalaryFormProps) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const [_value, setValue] = React.useState<number>(0);
  const [inputCaretPos, setInputCaretPos] = React.useState<{start: number | null, end: number | null}>({start: 0, end: 0});
  const [_isInputValid, setInputValid] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    if (+_value) {
      const yearsForPayment = Math.ceil(taxOfRealty / (+_value * INTERVAL_BY_MONTHS * TAX_RATE));
      if (yearsForPayment <= MAX_YEARS) {
        setInputValid(true);
      } else {
        setInputValid(false);
      }
    }
  }, [_value, setInputValid, taxOfRealty]);

  React.useEffect(() => {
    if (_value) {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd = inputCaretPos.start!;
    }
  }, [_value, inputRef, inputCaretPos]);

  const handleInputChange = React.useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.target.value.split(" ")[0];
    setValue(+inputValue);    
    const start = evt.target!.selectionStart;
    const end = evt.target!.selectionEnd;
    setInputCaretPos({start, end})    
  }, [setValue]);

  const handleInputFocus = React.useCallback((evt) => {
    const start = evt.target.value.length - 2;
    const end = evt.target.value.length - 2;
    setInputCaretPos({start, end}) 
  }, [setInputCaretPos]);

  const handleEnterPress = React.useCallback((evt: React.KeyboardEvent) => {
    if (evt.charCode === CharCode.ENTER) {
      evt.preventDefault();
      setInputValue(_value);
    }
  }, [setInputValue, _value]);

  const handleCalculateBtnClick = React.useCallback((evt) => {
    evt.preventDefault();
    setInputValue(_value);
  }, [setInputValue, _value]);



  return (
    <Container>
      <Label htmlFor="input-salary">Ваша зарплата в месяц</Label>
      <Input
        ref={inputRef}
        title={`Максимальный срок выплат составляет ${MAX_YEARS} лет. Ваша зарплата должна быть не менее ${Math.ceil(taxOfRealty / (INTERVAL_BY_MONTHS * TAX_RATE * MAX_YEARS))} ₽`}
        style={{ borderColor: _isInputValid || _isInputValid === null ? "#DFE3E6" : "#EA0029" }}
        type="text"
        id="input-salary"
        placeholder={"Введите данные"}
        value={_value ? `${_value} ₽` : ""}
        onChange={handleInputChange}
        onKeyPress={handleEnterPress}
        onFocus={handleInputFocus} />
      {!(_isInputValid || _isInputValid === null) ? <MessageOnInvalidInput>Поле обязательное для заполнения</MessageOnInvalidInput> : null}
      <CalculateBtn onClick={handleCalculateBtnClick} disabled={!(_isInputValid || _isInputValid === null)} >Рассчитать</CalculateBtn>
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
    dispatch(resetPayments());
    dispatch(updateSalary(value)); 
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SalaryForm);

import * as React from "react";
import styled from "styled-components";

const PaymentLenght = {
  FOUR: 4,
  FIVE: 5,
  SIX: 6
};

const LenghtOfHeadPyment = {
  ONE: 1,
  TWO: 2,
  THREE: 3
};

interface ICheckBoxInputProps {
  type: string,
  checked: boolean,
  value: string,
  name: string
};

const CheckBoxInput = styled.input.attrs<ICheckBoxInputProps>(({ type, value, name, checked }: ICheckBoxInputProps) => ({
  type,
  checked,
  value,
  name
}))`
  position: absolute !important;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
  
  &:focus+label {
    outline: 2px solid #000000;
  }
  &+label:before {
    dispaly: flex;
    box-sizing: border-box;
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 20px;
    height: 20px;
    background: transparent;
    border: 1px solid #DFE3E6;
    border-radius: 6px;
  }
  &:checked+label:before {
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  } 
  &:checked+label:after {
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    left: 3px;
    
    width: 14px;
    height: 11px;
    background: url("/img/checked.svg") no-repeat;
  }
`;


interface ICheckBoxLabelProps {
  htmlFor: string,
};

const CheckBoxLabel = styled.label.attrs<ICheckBoxLabelProps>(({ htmlFor }: ICheckBoxLabelProps) => ({
  htmlFor
}))`  
  display: block;
  position: relative;  
  padding: 16px 31px;
  border-bottom: 1px solid #DFE3E6;  

  color: #000000;
  font-family: "LabGrotesque", "Arial", sans-serif !impotant;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
`;

const AmountWrapper = styled.span`
  color: #000000;  
`;

const YearWrapper = styled.span`
  color: #808080;  
`;

interface IPaymentItemProps {
  name: string,
  value: number,  
  id: number,
  clickHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void
};

const PaymentItem: React.FC<IPaymentItemProps> = ({ value, name, id, clickHandler }: IPaymentItemProps) => {
  const [payment, setPayment] = React.useState<null | string>(null);

  React.useEffect(() => {
    const [int, dec] = value.toString().split(".");
    const addSpace = (int: string, dec: string, headCount: number) => {
      const head = int.slice(0, headCount);
      const newPayment = `${head} ${int.slice(headCount)}${dec ? `.${dec}` : ""}`;
      return newPayment
    }

    let newPayment;
    switch (int.length) {
      case PaymentLenght.FOUR:
        newPayment = addSpace(int, dec, int.slice(0, LenghtOfHeadPyment.ONE).length);
        setPayment(newPayment);
        break;
      case PaymentLenght.FIVE:
        newPayment = addSpace(int, dec, +int.slice(0, LenghtOfHeadPyment.TWO).length);
        setPayment(newPayment);
        break;
      case PaymentLenght.SIX:
        newPayment = addSpace(int, dec, +int.slice(0, LenghtOfHeadPyment.THREE).length);
        setPayment(newPayment);
        break;
    }

  }, [setPayment, value])
  return (<>
    <CheckBoxInput onChange={clickHandler} type="checkbox" id={name} value={value} name={name} />
    <CheckBoxLabel htmlFor={name}>
      <AmountWrapper>{payment} рублей</AmountWrapper>
      <YearWrapper> {id === 2 ? "во" : "в"} {id}-й год</YearWrapper>
    </CheckBoxLabel>
  </>);
};

export default PaymentItem;

import * as React from "react";
import styled from "styled-components";

interface CheckBoxInputProps {
  type: string,
  checked?: boolean,
  value: string,
  name: string
};

const CheckBoxInput = styled.input.attrs<CheckBoxInputProps>(({ type, value, name, checked }: CheckBoxInputProps) => ({
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


interface CheckBoxLabelProps {
  htmlFor: string,
};

const CheckBoxLabel = styled.label.attrs<CheckBoxLabelProps>(({ htmlFor }: CheckBoxLabelProps) => ({
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

interface PaymentItemProps {
  name: string,
  value: number,
  isChecked?: boolean,
  id: number
};

const PaymentItem: React.FC<PaymentItemProps> = ({ value, name, isChecked, id }: PaymentItemProps) => {
  return (<>
    <CheckBoxInput type="checkbox" id={name} value={value} name={name} />
    <CheckBoxLabel htmlFor={name}>
      <AmountWrapper>{value}</AmountWrapper>
      <YearWrapper> {id === 2 ? "во" : "в"} {id}-й год</YearWrapper>
    </CheckBoxLabel>
  </>);
};

export default PaymentItem;

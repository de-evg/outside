import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ActionCreator } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";

const Form = styled.form`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;  
`;

interface LabelProps {
  htmlFor: string
};

const Label = styled.label.attrs<LabelProps>(( htmlFor: LabelProps) => ({
  htmlFor
}))`
  margin-bottom: 8px;
  color: #000000;
  font-family: "Lab Grotesque", "Arial", sans-serif;  
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

interface InputProps {
  placeholder: string,
  id: string,
  type: string
}

const Input = styled.input.attrs<InputProps>(({ placeholder, id, type }: InputProps) => ({
  placeholder,
  id,
  type
}))`
  margin-bottom: 8px;  
  border: 1px solid #DFE3E6;
  padding: 8px 10px;
  font-family: "Lab Grotesque", "Arial", sans-serif;  
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

const SubmitBtn = styled.button`
  padding: 0;
  display: flex;
  border: none;
  background: transparent;
  color: #EA0029;
  font-family: "Lab Grotesque", "Arial", sans-serif;  
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  &:hover {
    color: #F53A31;
  }
  &:active {
    color: #EA0029;
  }
`;

const SalaryForm: React.FC = () => {
  return (
    <Form>
      <Label htmlFor="input-salary">Ваша зарплата в месяц</Label>
      <Input type="number" id="input-salary" placeholder={"Введите данные"} />
      <SubmitBtn>Рассчитать</SubmitBtn>
    </Form>
  );
};

export default SalaryForm;
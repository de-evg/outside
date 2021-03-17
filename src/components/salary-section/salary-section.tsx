import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;  
`;

interface LabelProps {
  htmlFor: string
};

const Label = styled.label.attrs<LabelProps>(( {htmlFor}: LabelProps) => ({
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
  type: string
}

const Input = styled.input.attrs<InputProps>(({ placeholder, id, type }: InputProps) => ({
  placeholder,
  id,
  type
}))`
  margin-bottom: 6px;  
  border: 1px solid #DFE3E6;
  padding: 8px 10px;
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

const CalculateBtn = styled.button`
  padding: 0;
  display: flex;
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
`;

const SalaryForm: React.FC = () => {
  return (
    <Container>
      <Label htmlFor="input-salary">Ваша зарплата в месяц</Label>
      <Input type="number" id="input-salary" placeholder={"Введите данные"} />
      <CalculateBtn>Рассчитать</CalculateBtn>
    </Container>
  );
};

export default SalaryForm;
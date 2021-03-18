import * as React from "react";
import styled from "styled-components";
import CloseButton from "../close-button/close-button";
import SalarySection from "../salary-section/salary-section";
import Button from "../button/button";
import DecreaseSection from "../decrease-section/decrease-section";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";

const Form = styled.form`  
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  padding: 32px 16px 16px 16px;
  min-width: 320px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;  
  background-color: #FFFFFF;
 
  @media(min-width: 768px) {
    border-radius: 30px;
    padding: 32px;
    min-width: 453px;
    min-height: 476px;
    width: 453px;
  }

  @media(min-width: 1440px) {
    min-width: 552px;
    min-height: 476px;
  }
`;

const Title = styled.h1` 
  margin: 0;
  margin-bottom: 16px;
  
  color: #000000;  
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
 
  @media(min-width: 768px) {
    font-size: 28px;
    line-height: 40px; 
  }
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 24px;

  color: #808080;
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;  

  @media (min-width: 768px) {
    max-width: 369px;
    font-size: 14px;
    line-height: 24px;  
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;`;

interface TaxFormProps {
  salary: number
};

const TaxForm: React.FC<TaxFormProps> = ({ salary }: TaxFormProps) => {
  const handleClick = React.useCallback((evt) => {
    evt.preventDefault();
  }, []);

  return (
    <Form>
      <CloseButton />
      <Title>Налоговый вычет</Title>
      <Description>
        Используйте налоговый вычет чтобы погасить ипотеку досрочно.
        Размер налогового вычета составляет не более 13% от своего официального годового дохода.
      </Description>
      <SalarySection />
      <DecreaseSection />
      <Wrapper>
        <Button text={"Добавить"} clickHandler={handleClick} isDisabled={!salary} />
      </Wrapper>
    </Form>
  );
};

interface ITaxFormState {
  [x: string]: {
    salary: number;
  }
};

const mapStateToProps = (state: ITaxFormState) => ({
  salary: state[NameSpace.NUMBERS].salary,
});

export default connect(mapStateToProps)(TaxForm);

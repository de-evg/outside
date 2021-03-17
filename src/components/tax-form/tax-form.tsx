import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ActionCreator } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";
import CloseButton from "../close-button/close-button";
import SalarySection from "../salary-section/salary-section";
import Button from "../button/button";
import DecreaseSection from "../decrease-section/decrease-section";

const Form = styled.form`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 16px;
  min-width: 320px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;  
  background-color: #FFFFFF;
 
  @media(min-width: 768px) {
    border-radius: 30px;
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
  font-family: "Lab Grotesque", "Arial", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
 
  @media(min - width: 768px) {
    
  }

  @media(min - width: 1440px) {
    
  }
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 24px;
  color: #808080;
  font-family: "Lab Grotesque", "Arial", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;`;

const TaxForm: React.FC = () => {

  return (
    <Form>
      <CloseButton clickHandler={() => { }} />
      <Title>Налоговый вычет</Title>
      <Description>
        Используйте налоговый вычет чтобы погасить ипотеку досрочно.
        Размер налогового вычета составляет не более 13% от своего официального годового дохода.
      </Description>
      <SalarySection />
      <DecreaseSection />
      <Wrapper>
        <Button text={"Добавить"} clickHandler={() => { }} />
      </Wrapper>
    </Form>
  );
};

// const mapStateToProps = (state: { [x: string]: { isStartPopupShowed: boolean; }; }) => ({
//   isStartPopupShowed: state[NameSpace.INTERFACE].isStartPopupShowed
// });

// const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void) => ({
//   hidePopup() {
//     dispatch(ActionCreator.closePopup());
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TaxDeduction);
export default TaxForm;

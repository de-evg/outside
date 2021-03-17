import * as React from "react";
import styled from "styled-components";
import PaymentList from "../payment-list/payment-list";
import TagButton from "../tag-button/tag-button";

const Container = styled.div`  
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin: 0;
  margin-bottom: 24px; 
  color: #000000;
  font-family: "Lab Grotesque", "Arial", sans-serif;  
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ContainerRow = styled.div`
  width: 138px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const ContainerStyled = styled(ContainerColumn)`
  padding-bottom: 40px;
  flex-grow: 1;

  @media (min-width: 768px) {
    width: 334px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;


const DecreaseSection: React.FC = () => {
  return (
    <Container>
      <ContainerColumn>        
        <PaymentList />
      </ContainerColumn>
      <ContainerStyled>
        <Title>Что уменьшаем?</Title>
        <ContainerRow>
          <TagButton value="payment" name="decrease" isChecked={true}>Платеж</TagButton>
          <TagButton value="time" name="decrease">Срок</TagButton>
        </ContainerRow>
      </ContainerStyled>      
    </Container>
  );
};

export default DecreaseSection;
import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ActionCreator } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";
import Button from "../button/button";
import PaymentList from "../payment-list/payment-list";
import TagButton from "../tag-button/tag-button";

const Form = styled.form`  
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin: 0;
  margin-bottom: 24px;
  width: 150px;
  color: #000000;
  font-family: "Lab Grotesque", "Arial", sans-serif;  
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const TitleWithoutMargin = styled(Title)`
  margin-bottom: 0;
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

const ContainerColumnWithMargin = styled(ContainerColumn)`
  margin-bottom: 40px;  
  flex-grow: 1;
`;

const Wrapper = styled.div`
  margin-top: auto;  
`;



const TaxForm: React.FC = () => {
  return (
    <Form>
      <ContainerColumn>
        <TitleWithoutMargin>Итого можете внести в качестве досрочных:</TitleWithoutMargin>
        <PaymentList />
      </ContainerColumn>
      <ContainerColumnWithMargin>
        <Title>Что уменьшаем</Title>
        <ContainerRow>
          <TagButton value="payment" name="decrease" isChecked={true}>Платеж</TagButton>
          <TagButton value="time" name="decrease">Срок</TagButton>
        </ContainerRow>
      </ContainerColumnWithMargin>
      <Wrapper>
        <Button text={"Добавить"} clickHandler={() => { }} />
      </Wrapper>
    </Form>
  );
};

export default TaxForm;
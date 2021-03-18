import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PaymentList from "../payment-list/payment-list";
import TagButton from "../tag-button/tag-button";
import { toggleDecrease } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";
import { Dispatch } from "redux";
import { IToggleDecreaseAction } from "../../store/action";

const Decrease = {
  PAYMENT: "payment",
  TIME: "time"
};

const Container = styled.div`  
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin: 0;
  margin-bottom: 24px; 

  color: #000000;  
  font-family: "LabGrotesque", "Arial", sans-serif;
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
  @media (min-width: 768px) {
    width: 146px;
  }
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
    width: 290px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

interface DecreaseSectionPopup {
  decreaseBy: string;
  toggle: (evt: any) => void;
};

const DecreaseSection: React.FC<DecreaseSectionPopup> = ({ decreaseBy, toggle }: DecreaseSectionPopup) => {
  const handleTagBtnClick = React.useCallback((evt) => {    
    toggle(evt.target.value);
  }, [toggle]);

  return (
    <Container>
      <ContainerColumn>
        <PaymentList />
      </ContainerColumn>
      <ContainerStyled>
        <Title>Что уменьшаем?</Title>
        <ContainerRow>
          <TagButton changeHandler={handleTagBtnClick} value={Decrease.PAYMENT} name="decrease" isChecked={Decrease.PAYMENT === decreaseBy}>Платеж</TagButton>
          <TagButton changeHandler={handleTagBtnClick} value={Decrease.TIME} name="decrease" isChecked={Decrease.TIME === decreaseBy}>Срок</TagButton>
        </ContainerRow>
      </ContainerStyled>
    </Container>
  );
};

interface DecreaseSectionState {
  [x: string]: { decreaseBy: string; }
};

const mapStateToProps = (state: DecreaseSectionState) => ({
  decreaseBy: state[NameSpace.INTERFACE].decreaseBy
});

const mapDispatchToProps = (dispatch: Dispatch<IToggleDecreaseAction>) => ({
  toggle(decrease: string) {
    dispatch(toggleDecrease(decrease));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DecreaseSection);

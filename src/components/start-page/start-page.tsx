import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { togglePopup } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";
import StrokeButton from "../stroke-button/stroke-button";

const Container = styled.div`  
  margin: 0 auto;
  min-width: 320px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  box-shadow: 0px -0.11px 16.9495px rgba(183, 187, 225, 0.33);

  @media(min - width: 768px) {
    min-width: 768px;
  }

  @media(min - width: 1440px) {
    min-width: 1440px;
  }
`;

interface IStartPopupProps {
  isTaxPopupShowed: boolean,
  showPopup: () => void
};

const StartPopup: React.FC<IStartPopupProps> = ({ isTaxPopupShowed, showPopup }: IStartPopupProps) => {
  const handleBtnClick = React.useCallback(() => {
    showPopup();
  }, [showPopup]);

  return (
    <>
      {
        !isTaxPopupShowed && (
          <Container>
            <StrokeButton clickHandler={handleBtnClick} text="Налоговый вычет" />
          </Container>
        )
      }
    </>
  );
};

const mapStateToProps = (state: { [x: string]: { isTaxPopupShowed: boolean; }; }) => ({
  isTaxPopupShowed: state[NameSpace.INTERFACE].isTaxPopupShowed
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void) => ({
  showPopup() {
    dispatch(togglePopup());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPopup);


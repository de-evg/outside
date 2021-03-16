import * as React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { ActionCreator } from "../../store/action";
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

const fadeIn = keyframes`
  0% {
    opacity: 1;
  }

  35% {
    opacity: 0;
  }

  100% {
    position: absolute;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden; 
    opacity: 0;   
  }
`;

const FadeInContainer = styled(Container)`
  animation: 1.6s ${fadeIn} ease-in both;
`;

interface StartPopupProps {
  isStartPopupShowed: boolean,
  hidePopup: () => void
};

const StartPopup: React.FC<StartPopupProps> = ({ isStartPopupShowed, hidePopup }) => {
  const handleBtnClick = React.useCallback(() => {
    hidePopup();
  }, [hidePopup]);

  return (
    <>
      {
        isStartPopupShowed && (
          <Container>
            <StrokeButton clickHandler={handleBtnClick} text="Налоговый вычет" />
          </Container>
        )
      }
      {
        !isStartPopupShowed && (
          <FadeInContainer>
            <StrokeButton clickHandler={handleBtnClick} text="Налоговый вычет" />
          </FadeInContainer>
        )
      }
    </>
  );
};

const mapStateToProps = (state: { [x: string]: { isStartPopupShowed: boolean; }; }) => ({
  isStartPopupShowed: state[NameSpace.INTERFACE].isStartPopupShowed
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void) => ({
  hidePopup() {
    dispatch(ActionCreator.closePopup());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPopup);


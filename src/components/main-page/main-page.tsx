import * as React from "react";
import styled from "styled-components";
import StrokeButton from "../stroke-button/stroke-button";
import { BtnSize } from "../../const";

const Main = styled.section`  
  overflow: hidden;
`;

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

  @media (min-width: 768px) {
    min-width: 768px;    
  }

  @media (min-width: 1440px) {
    min-width: 1440px;    
  }
`;

const MainPage: React.FC = () => {
  return (
    <Main>
      <Container>
        <StrokeButton size={ BtnSize.Small } clickHandler={() => {}} text="Налоговый вычет" />
      </Container>
    </Main>
  );
};

export default MainPage;

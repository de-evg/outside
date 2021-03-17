import * as React from "react";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import styled from "styled-components";
import StartPopup from "../start-popup/start-popup";
import TaxForm from "../tax-form/tax-form";


const Main = styled.section`
  min-width: 320px;  
  
  @media (min-width: 768px) {    
    min-width: 768px;
  }

  @media (min-width: 1440px) {    
    min-width: 1440px;
  }
  `;

const Container = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {    
    padding-top: 120px;
  }

  @media (min-width: 1440px) {        
  }
`;


interface MainPageProps {
  isStartPopupShowed: boolean
};

const MainPage: React.FC<MainPageProps> = ({ isStartPopupShowed }) => {
  return (
    <Main>
      {isStartPopupShowed ? <StartPopup /> : <Container><TaxForm /></Container>}
    </Main>
  );
};

const mapStateToProps = (state: { [x: string]: { isStartPopupShowed: boolean; }; }) => ({
  isStartPopupShowed: state[NameSpace.INTERFACE].isStartPopupShowed
});

export default connect(mapStateToProps)(MainPage);

import * as React from "react";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import styled from "styled-components";
import StartPage from "../start-page/start-page";
import TaxFormPopup from "../tax-form-popup/tax-form-popup";


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
  isTaxPopupShowed: boolean
};

const MainPage: React.FC<MainPageProps> = ({ isTaxPopupShowed }) => {
  return (
    <Main>
      {!isTaxPopupShowed ? <StartPage /> : <Container><TaxFormPopup /></Container>}
    </Main>
  );
};

const mapStateToProps = (state: { [x: string]: { isTaxPopupShowed: boolean; }; }) => ({
  isTaxPopupShowed: state[NameSpace.INTERFACE].isTaxPopupShowed
});

export default connect(mapStateToProps)(MainPage);

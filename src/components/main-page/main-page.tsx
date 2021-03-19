import * as React from "react";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import styled from "styled-components";
import StartPage from "../start-page/start-page";
import TaxFormPopup from "../tax-form-popup/tax-form-popup";
import ResultPopup from "../result-popup/result-popup";


const Main = styled.div`
  min-width: 320px;
  background-color: rgba(0, 0, 0, 0.3);
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

  @media (min-width: 768px) {    
    padding-top: 120px;
    min-height: 100vh;
  }

  @media (min-width: 1440px) {       
  }
`;


interface IMainPageProps {
  isTaxPopupShowed: boolean,
  isStartPopupShowed: boolean,
  isResultShowed: boolean,
};

const MainPage: React.FC<IMainPageProps> = ({ isStartPopupShowed, isTaxPopupShowed, isResultShowed }: IMainPageProps) => {
  return (
    <Main>
      {isStartPopupShowed ? <StartPage /> : null}
      {isTaxPopupShowed ? <Container><TaxFormPopup /></Container> : null}
      {isResultShowed ? <Container><ResultPopup /></Container> : null}
    </Main>
  );
};

const mapStateToProps = (state: { [x: string]: IMainPageProps; }) => ({
  isTaxPopupShowed: state[NameSpace.INTERFACE].isTaxPopupShowed,
  isStartPopupShowed: state[NameSpace.INTERFACE].isStartPopupShowed,
  isResultShowed: state[NameSpace.INTERFACE].isResultShowed,
});

export default connect(mapStateToProps)(MainPage);

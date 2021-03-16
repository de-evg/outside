import * as React from "react";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import styled from "styled-components";
import StartPopup from "../start-popup/start-popup";
import TaxDeduction from "../tax-deduction/tax-deduction";


const Main = styled.section``;

interface MainPageProps {
  isStartPopupShowed: boolean
};

const MainPage: React.FC<MainPageProps> = ({ isStartPopupShowed }) => {
  return (
    <Main>
      {isStartPopupShowed ? <StartPopup /> : <TaxDeduction />}
    </Main>
  );
};

const mapStateToProps = (state: { [x: string]: { isStartPopupShowed: boolean; }; }) => ({
  isStartPopupShowed: state[NameSpace.INTERFACE].isStartPopupShowed
});

export default connect(mapStateToProps)(MainPage);

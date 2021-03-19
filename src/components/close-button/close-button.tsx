import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { resetDecrease, resetNumbers, returnOnStartPage } from "../../store/action";

const Button = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  align-self: flex-end;
  background: transparent;
  border: none; 
  padding: 0;
  
  width: 24px;
  height: 24px; 
  
  &:before {
    position: absolute;
    content: "";
    width: 17px;
    height: 2px;
    border-radius: 2px;
    background: #EA0029;
  }

  &:after {
    position: absolute;
    content: "";
    width: 17px;
    height: 2px;
    border-radius: 2px;
    background: #EA0029;
  }

  &:before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;

    right: 12px;

    &:before {      
      width: 25px;
      height: 4px;      
    }

    &:after {      
      width: 25px;
      height: 4px;      
    }
  }

  @media (min-width: 1440px) {   
    right: 16px; 
  }
`;

interface ICloseButtonPopup {
  closePopup: () => void, 
};

const CloseButton: React.FC<ICloseButtonPopup> = ({ closePopup }: ICloseButtonPopup) => {
  const handleClick = React.useCallback((evt) => {
    evt.preventDefault();    
    closePopup();    
  }, [closePopup]);

  return <Button onClick={handleClick} />
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void) => ({
  closePopup() {
    dispatch(returnOnStartPage());
    dispatch(resetDecrease());
    dispatch(resetNumbers());    
  }
});

export default connect(null, mapDispatchToProps)(CloseButton);

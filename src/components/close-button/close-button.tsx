import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
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
  }

  @media (min-width: 1440px) {    
  }
`;

interface CloseButtonProps {  
  clickHandler: () => void
};

const CloseButton: React.FC<CloseButtonProps> = ({ clickHandler }: CloseButtonProps) => <Button onClick={clickHandler} />

export default CloseButton;

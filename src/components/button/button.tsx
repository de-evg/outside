import * as React from "react";
import styled from "styled-components";

const SimpleButton = styled.button`
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
  border: none;
  border-radius: 6px;
  width: 100%;
  height: 40px;

  color: #FFFFFF;  
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #EA0029;
  }
  &:action {
    background: #EA0029;
  }
  &:disabled {
    background: #BEC5CC;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    width: 389px;
    height: 56px;

    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1440px) {
    width: 488px;
  }
`;

interface IButtonProps {
  text: string,
  isDisabled: boolean,
  clickHandler: (evt: any) => void
};

const Button: React.FC<IButtonProps> = ({ text, isDisabled, clickHandler }: IButtonProps) => <SimpleButton onClick={clickHandler} disabled={isDisabled}>{text}</SimpleButton>;

export default Button;

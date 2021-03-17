import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  filter: drop-shadow(0px 0px 44px #CFDAE7);
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0 10px;
  width: 198px;
  min-height: 56px;

  color: #FFFFFF;
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-style: normal;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #FFFFFF;
    color: #000000;
  }
  &:action {
    background: #FFFFFF;
    color: #000000;
  }
  &:disabled {
    background: #BEC5CC;
  }

  @media (min-width: 768px) {
    width: 198px;

    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1440px) {
    width: 198px;

    font-size: 16px;
    line-height: 24px;
  }
`;

interface ButtonProps {
  text: string,
  clickHandler: () => void
};

const StrokeButton: React.FC<ButtonProps> = ({ text, clickHandler }: ButtonProps) => {
  return (
    <Button onClick={clickHandler}>{text}</Button>
  );
};

export default StrokeButton;

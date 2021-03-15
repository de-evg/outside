import * as React from "react";
import styled from "styled-components";

const SimpleButton = styled.button`
  background: transparent;
  filter: drop-shadow(0px 0px 44px #CFDAE7);
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0 10px;

  color: #FFFFFF;
  font-family: "Lab Grotesque", "Arial", sans-serif;
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

  #media (min-width: 768px) {
    width: 198px;
    height: 56px;

    font-size: 16px;
    line-height: 24px;
  }

  #media (min-width: 1440px) {
    width: 198px;
    height: 56px;

    font-size: 16px;
    line-height: 24px;
  }
`;

const SmallButton = styled(SimpleButton)`
  width: 158px;
  height: 40px;

  font-size: 12px;
  line-height: 16px;
`;

const BigButton = styled(SimpleButton)`
  width: 211px;
  height: 56px;

  font-size: 16px;
  line-height: 24px;
`;

enum ButtonTypes {
  Small = "small",
  Big = "Big"
};

interface ButtonProps {
  text: string,
  size: string
  clickHandler: () => void
};

const StrokeButton: React.FC<ButtonProps> = ({ text, size, clickHandler }: ButtonProps) => {
  return (<>
    {size === ButtonTypes.Small && <SmallButton onClick={clickHandler}>{text}</SmallButton>}
    {size === ButtonTypes.Big && <BigButton onClick={clickHandler}>{text}</BigButton>}
  </>)

};

export default StrokeButton;

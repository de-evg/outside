import * as React from "react";
import styled from "styled-components";

const SimpleButton = styled.button`
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
  border-radius: 6px;

  color: #FFFFFF;
  
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
  }
`;

const SmallButton = styled(SimpleButton)`
  width: 288px;
  height: 40px;

  font-size: 12px;
  line-height: 16px;
`;

const BigButton = styled(SimpleButton)`
  width: 280px;
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

const Button: React.FC<ButtonProps> = ({ text, size, clickHandler }: ButtonProps) => {
  return (<>
    {size === ButtonTypes.Small && <SmallButton onClick={clickHandler}>{text}</SmallButton>}
    {size === ButtonTypes.Big && <BigButton onClick={clickHandler}>{text}</BigButton>}
  </>)

};

export default Button;

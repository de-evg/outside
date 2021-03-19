import * as React from "react";
import styled from "styled-components";

interface ITagRadioBtnProps {
  type: string,
  checked?: boolean,
  value: string,
  name: string
};

const TagBtn = styled.input.attrs<ITagRadioBtnProps>(({ type, value, name, checked }: ITagRadioBtnProps) => ({
  type,
  checked,
  value,
  name
}))`
  position: absolute !important;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;

  &:focus+label {
    outline: 2px solid #000000;
  }
  &+label:hover {
    background: #DFE3E6;
  }
  &:focus+label {
    background: #DFE3E6;
  }
  &:click+label {
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  }
  &:checked+label {
    color: #FFFFFF;
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  }
`;


interface ITagLabelProps {
  htmlFor: string,
};

const TagLabel = styled.label.attrs<ITagLabelProps>(({ htmlFor }: ITagLabelProps) => ({
  htmlFor
}))`
  background: #EEF0F2; 
  padding: 6px 12px;
  border-radius: 50px; 

  color: #000000;
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ITagButtonProps {
  changeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  name: string,
  value: string,
  children: string
  isChecked: boolean
};

const TagButton: React.FC<ITagButtonProps> = ({ changeHandler, value, name, isChecked, children }: ITagButtonProps) => {
  return (<>
    <TagBtn onChange={changeHandler} type="radio" id={value} checked={isChecked} value={value} name={name} />
    <TagLabel htmlFor={value}>{children}</TagLabel>
  </>)
};

export default TagButton;

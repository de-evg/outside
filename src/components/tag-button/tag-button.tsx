import * as React from "react";
import styled from "styled-components";

interface TagRadioBtnProps {
  type: string,
  checked?: boolean,
  value: string,
  name: string
};

const TagBtn = styled.input.attrs<TagRadioBtnProps>(({type,  value, name, checked}: TagRadioBtnProps) => ({
  type,
  checked,
  value,
  name
}))`
  display: none;
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


interface TagLabelProps {
  htmlFor: string,
};

const TagLabel = styled.label.attrs<TagLabelProps>(({htmlFor}: TagLabelProps) => ({
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

interface TagButtonProps {
  changeHandler: (evt: any) => void;
  name: string,
  value: string,
  children: string
  isChecked: boolean
};

const TagButton: React.FC<TagButtonProps> = ({ changeHandler, value, name, isChecked, children }: TagButtonProps) => {
  return (<>    
    <TagBtn onChange={changeHandler} type="radio" id={value} checked={isChecked} value={value} name={name} />
    <TagLabel htmlFor={value}>{children}</TagLabel>
  </>)
};

export default TagButton;

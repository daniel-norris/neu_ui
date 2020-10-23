import React from "react";
import styled from "styled-components";


const ToggleWrapper = styled.label`
  display: flex;
  align-items: center;
  width: 5em;
`;

const Switch = styled.div`
  margin-right: 1rem;
  background-color: rgba(204, 218, 226, 0.349);
  border-radius: 2rem;
  display: flex;
  height: 1.25em;
  width: 2.5em;
  border: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
    inset 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
`;

const Slider = styled.div`
  box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;
  height: 1.25em;
  width: 1.25em;
  border: none;
  outline: none;
  background-color: #edf2f4;
  font-size: 1rem;
  transition: 0.5s;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
`;

const Light = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 1rem;
  background-color: rgb(223, 223, 223);
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + ${Switch}>${Slider} {
    -webkit-transform: translateX(1.25em);
    -ms-transform: translateX(1.25em);
    transform: translateX(1.25em);
  }
    
  &:checked ~ ${Light} {
    width: 0.6rem;
    height: 0.6rem;
    background-color: rgba(245, 203, 122, 1);
  }
`;

export const Toggle = () => (
  <ToggleWrapper>  
    <Checkbox />
    <Switch>
      <Slider />
    </Switch>
    <Light />
  </ToggleWrapper>
);

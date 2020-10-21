import React, { Component } from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleBackground = styled.div`
  background-color: rgba(204, 218, 226, 0.349);
  border-radius: 2rem;
  display: flex;
  height: 1.25em;
  width: 2.5em;
  border: none;
  outline: none;
  margin-right: 1rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
    inset 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
`;

const ToggleOnAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(1.25em); }
`;

const ToggleOn = styled.button`
  box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;
  height: 1.25em;
  width: 1.25em;
  border: none;
  outline: none;
  background-color: #edf2f4;
  font-size: 1rem;
  cursor: pointer;
  animation: 0.5s ${ToggleOnAnimation};
  animation-fill-mode: forwards;
`;

const ToggleOffAnimation = keyframes`
  0% { transform: translateX(1.25em); }
  100% { transform: translateX(0); }
`;

const ToggleOff = styled.button`
  box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;
  height: 1.25em;
  width: 1.25em;
  border: none;
  outline: none;
  background-color: #edf2f4;
  font-size: 1rem;
  cursor: pointer;
  animation: 0.5s ${ToggleOffAnimation};
  animation-fill-mode: forwards;
`;

const LightWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LightOn = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 1rem;
  background-color: #fff;
  margin: 0;
  background-color: rgba(245, 203, 122, 1);
`;

const LightOff = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 1rem;
  background-color: #fff;
  background-color: rgb(223, 223, 223);
`;

const HiddenNativeCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        const { clicked } = this.state;

        return (
            <Wrapper>
                <HiddenNativeCheckbox checked={clicked} onChange={this.handleClick} />
                <ToggleBackground>
                    {
                        clicked ?
                        <ToggleOn onClick={this.handleClick} />:
                        <ToggleOff onClick={this.handleClick} />
                    }
                </ToggleBackground>
                <LightWrapper>{clicked ? <LightOn /> : <LightOff />}</LightWrapper>
            </Wrapper>
        );
    }
}


import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledRangeInput = styled.input.attrs({
  type: "range",
})`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  margin-bottom: 2rem; /* for demo mainly */

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  :focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  ::-ms-track {
    width: 100%;
    cursor: pointer;
    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background: #edf2f4;
    cursor: pointer;
    margin-top: -8px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
      -8px -8px 16px 0 rgba(255, 255, 255, 0.5);
  }

  ::-moz-range-thumb {
    box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
      -8px -8px 16px 0 rgba(255, 255, 255, 0.5);
    border: none;
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background: #edf2f4;
    cursor: pointer;
  }

  ::-ms-thumb {
    box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
      -8px -8px 16px 0 rgba(255, 255, 255, 0.5);
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background: #edf2f4;
    cursor: pointer;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: rgba(204, 218, 226, 0.349);
    box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
      inset 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
  }

  :focus::-webkit-slider-runnable-track {
    background-color: rgba(204, 218, 226, 0.349);
  }

  ::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: rgba(204, 218, 226, 0.349);
    box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
      inset 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
  }

  ::-ms-track {
    width: 100%;
    height: 0.8rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
    margin-top: -8px;
  }

  ::-ms-fill-lower {
    background-color: rgba(204, 218, 226, 0.349);
    border-radius: 0.8rem;
    box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
      inset 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
  }

  :focus::-ms-fill-lower {
    background-color: rgba(204, 218, 226, 0.349);
  }

  ::-ms-fill-upper {
    background-color: rgba(204, 218, 226, 0.349);
    border-radius: 0.8rem;
    box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
      inset 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
  }

  :focus::-ms-fill-upper {
    background-color: rgba(204, 218, 226, 0.349);
  }
`;

export const Slider = ({ min, max }) => (
  <StyledRangeInput min={min} max={max}></StyledRangeInput>
);

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
};

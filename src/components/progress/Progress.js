import React from "react";
import { Label } from "../forms/Label";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledProgress = styled.progress`
  width: 20rem;
  height: 0.8rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;

  border-radius: 0.5rem;
  background-color: rgba(204, 218, 226, 0.349);
  box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
    inset 6px 6px 10px 0px rgba(0, 0, 0, 0.2);

  ::-webkit-progress-bar {
    border-radius: 0.5rem;
    background-color: rgba(204, 218, 226, 0.349);
    box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
      inset 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
  }

  ::-webkit-progress-value {
    border-radius: 0.5rem;
    height: 0.8rem;
    border: none;
    outline: none;
    background: linear-gradient(
      90deg,
      rgba(244, 167, 129, 1) 0%,
      rgba(245, 186, 125, 1) 63%,
      rgba(245, 203, 122, 1) 100%
    );
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.2); /* needs uniformity */
  }

  ::-moz-progress-bar {
    border-radius: 0.5rem;
    height: 0.8rem;
    border: none;
    outline: none;
    background: linear-gradient(
      90deg,
      rgba(244, 167, 129, 1) 0%,
      rgba(245, 186, 125, 1) 63%,
      rgba(245, 203, 122, 1) 100%
    );
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.2); /* needs uniformity */
  }

  ::-ms-fill {
    border-radius: 0.5rem;
    height: 0.8rem;
    border: none;
    outline: none;
    background: linear-gradient(
      90deg,
      rgba(244, 167, 129, 1) 0%,
      rgba(245, 186, 125, 1) 63%,
      rgba(245, 203, 122, 1) 100%
    );
  }
`;

export const Progress = ({ id, children, max, value }) => (
  <>
    <div>
      <Label htmlFor={id}>{children}</Label>
      <StyledProgress id={id} max={max} value={value}></StyledProgress>
    </div>
  </>
);

Progress.propTypes = {
  /**
   * Pass children to label the progress bar.
   */
  children: PropTypes.string,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  /**
   * ID for progress bar.
   */
  id: PropTypes.string,
  /**
   * For attribute for label.
   */
  htmlFor: PropTypes.string,
};

Progress.defaultProps = {
  children: null,
  max: 100,
  value: 0,
  id: null,
  htmlFor: null,
};

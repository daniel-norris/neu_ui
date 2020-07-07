import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledRadioInput = styled.input.attrs({
  type: "radio",
})`
  :not(:checked),
  :checked {
    position: absolute;
    left: -9999px;
  }

  :not(:checked) + label,
  :checked + label {
    position: relative;
    padding-left: 1.95em;
    cursor: pointer;
    color: rgb(139, 139, 139);
    font-weight: 300;
    font-family: roboto, helvetica, sans-serif;
  }

  :not(:checked) + label:before,
  :checked + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1.25em;
    height: 1.25em;
    background: rgba(204, 218, 226, 0.349);
    border-radius: 1.25em;
    box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
      inset 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
  }

  :not(:checked) + label:after,
  :checked + label:after {
    content: "\\2022\\0020";
    position: absolute;
    top: -1.6rem;
    left: -0.9rem;
    font-size: 5rem;
    line-height: 0.8;
    color: #999; /* tick color */
    transition: all 0.2s;
    font-family: "Lucida Sans Unicode", "Arial Unicode MS", Arial;
  }

  :not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }

  :checked + label:after {
    opacity: 1;
    transform: scale(1);
  }

  :disabled:not(:checked) + label:before,
  :disabled:checked + label:before {
    box-shadow: none;
    border-color: #bbb;
    background-color: #ddd;
  }

  :disabled:checked + label:after {
    color: #999;
  }

  :disabled + label {
    color: #aaa;
  }
`;

const StyledCheckInput = styled.input.attrs({
  type: "checkbox",
})`
  :not(:checked),
  :checked {
    position: absolute;
    left: -9999px;
  }

  :not(:checked) + label,
  :checked + label {
    position: relative;
    padding-left: 1.95em;
    cursor: pointer;
    color: rgb(139, 139, 139);
    font-weight: 300;
    font-family: roboto, helvetica, sans-serif;
  }

  :not(:checked) + label:before,
  :checked + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1.25em;
    height: 1.25em;
    background: rgba(204, 218, 226, 0.349);
    border-radius: 4px;
    box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
      inset 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
  }

  :not(:checked) + label:after,
  :checked + label:after {
    content: "\\2713\\0020";
    position: absolute;
    top: 0.15em;
    left: 0.22em;
    font-size: 1.3em;
    line-height: 0.8;
    color: #999;
    transition: all 0.2s;
    font-family: "Lucida Sans Unicode", "Arial Unicode MS", Arial;
  }

  :not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }

  :checked + label:after {
    opacity: 1;
    transform: scale(1);
  }

  :disabled:not(:checked) + label:before,
  :disabled:checked + label:before {
    box-shadow: none;
    border-color: #bbb;
    background-color: #ddd;
  }

  :disabled:checked + label:after {
    color: #999;
  }

  :disabled + label {
    color: #aaa;
  }

  :checked:focus + label:before,
  :not(:checked):focus + label:before {
    border: 2px solid blue;
  }
`;

export const Check = ({ disabled, id, label, name }) => (
  <>
    <p>
      <StyledCheckInput
        id={id}
        name={name ? name : null}
        disabled={disabled ? disabled : null}
      />
      <label htmlFor={id}>{label}</label>
    </p>
  </>
);

export const Radio = ({ disabled, id, label, name }) => (
  <>
    <p>
      <StyledRadioInput
        id={id}
        name={name ? name : null}
        disabled={disabled ? disabled : null}
      />
      <label htmlFor={id}>{label}</label>
    </p>
  </>
);

Check.propTypes = {
  /**
   * Select whether input is disabled.
   */
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};

Check.defaultProps = {
  disabled: false,
  id: null,
  label: null,
  name: null,
};

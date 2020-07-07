import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTextInput = styled.input`
  margin-bottom: 2rem;

  background-color: rgba(204, 218, 226, 0.349);

  box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
    inset 4px 4px 6px 0px rgba(0, 0, 0, 0.2);

  padding: 0.5rem 0.5rem 0.5rem 0.6rem;
  border: none;
  outline: none;
  width: 100%;
  border-radius: 0.4rem;
  color: rgb(139, 139, 139);
  font-family: roboto, helvetica, sans-serif;
  font-weight: 300;
  font-size: 90%;
`;

export const Input = ({ placeholder, type, id, name }) => (
  <StyledTextInput
    placeholder={placeholder}
    type={type}
    id={id}
    name={name}
  ></StyledTextInput>
);

Input.propTypes = {
  /**
   * Placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * Choose an input type.
   */
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

Input.defaultProps = {
  placeholder: null,
  type: null,
  name: null,
  id: null,
};

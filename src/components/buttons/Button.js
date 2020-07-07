import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background: red;
  color: white;
  padding: 0.375rem 0.75rem;
  background-color: rgba(204, 218, 226, 0.349);
  box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
    -8px -8px 16px 0 rgba(255, 255, 255, 0.5);
  font-size: ${(props) => (props.size === "sml" ? "1rem" : "1.5rem ")}
  padding: 0.375rem 0.75rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  color: rgb(139, 139, 139);
  font-size: 1rem;
  line-height: 1.5;

  &:active {
    box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
    inset 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    color: rgba(139, 139, 139, 0.788);
  }
`;

export const Button = ({ size, children }) => {
  return <StyledButton size={size}>{children}</StyledButton>;
};

const sizes = {
  small: "small",
  large: "large",
};

Button.propTypes = {
  /**
   * Pass children to label the button.
   */
  children: PropTypes.string,
  /**
   * Choose a size.
   */
  size: PropTypes.oneOf(Object.keys(sizes)),
};

Button.defaultProps = {
  children: null,
  size: "small",
};

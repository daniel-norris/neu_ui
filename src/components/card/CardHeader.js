import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCardHeader = styled.header`
  background-color: #999;
  color: rgb(255, 255, 255);
  padding: 1rem;
  margin: 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  font-size: 1.25rem;
`;

export const CardHeader = ({ children }) => (
  <StyledCardHeader>{children}</StyledCardHeader>
);

CardHeader.propTypes = {
  /**
   * Pass children to input text into the CardHeader.
   */
  children: PropTypes.string.isRequired,
};

CardHeader.defaultProps = {
  children: null,
};

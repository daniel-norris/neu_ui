import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCardTitle = styled.h1`
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
`;

export const CardTitle = ({ children }) => (
  <StyledCardTitle>{children}</StyledCardTitle>
);

CardTitle.propTypes = {
  /**
   * Pass children to include text.
   */
  children: PropTypes.string.isRequired,
};

CardTitle.defaultProps = {
  children: null,
};

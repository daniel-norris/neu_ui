import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCardSubtitle = styled.h2`
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const CardSubtitle = ({ children }) => (
  <StyledCardSubtitle>{children}</StyledCardSubtitle>
);

CardSubtitle.propTypes = {
  /**
   * Pass children to include text.
   */
  children: PropTypes.string.isRequired,
};

CardSubtitle.defaultProps = {
  children: null,
};

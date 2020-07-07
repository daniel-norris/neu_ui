import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCardText = styled.p`
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const CardText = ({ children }) => (
  <StyledCardText>{children}</StyledCardText>
);

CardText.propTypes = {
  /**
   * Pass children to include text.
   */
  children: PropTypes.string.isRequired,
};

CardText.defaultProps = {
  children: null,
};

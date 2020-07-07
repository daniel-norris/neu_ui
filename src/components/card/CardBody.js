import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCardBody = styled.section`
  padding: 1rem;
`;

export const CardBody = ({ children }) => (
  <StyledCardBody>{children}</StyledCardBody>
);

CardBody.propTypes = {
  /**
   * Pass children pass text into the Card content.
   */
  children: PropTypes.string.isRequired,
};

CardBody.defaultProps = {
  children: null,
};

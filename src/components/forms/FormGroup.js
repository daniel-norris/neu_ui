import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = ({ children }) => (
  <StyledFormGroup>{children}</StyledFormGroup>
);

FormGroup.propTypes = {
  /**
   * Pass children to include text.
   */
  children: PropTypes.string,
};

FormGroup.defaultProps = {
  children: null,
};

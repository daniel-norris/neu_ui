import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.label`
  margin-bottom: 2rem;

  color: rgb(139, 139, 139);
  font-family: roboto, helvetica, sans-serif;
`;

export const Label = ({ id, children }) => (
  <StyledLabel htmlFor={id}>{children}</StyledLabel>
);

Label.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
};

Label.defaultProps = {
  children: null,
  id: null,
};

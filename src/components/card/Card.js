import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.article`
  background-color: rgba(204, 218, 226, 0.349);
  box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
    -8px -8px 16px 0 rgba(255, 255, 255, 0.5);
  width: 25vw;
  border-radius: 1rem;
  font-family: roboto, helvetica, sans-serif;
  color: rgb(139, 139, 139);
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

Card.propTypes = {
  /**
   * Card will take a child prop but should only be passed sub components
   */
  children: PropTypes.string.isRequired,
};

Card.defaultProps = {
  children: null,
};

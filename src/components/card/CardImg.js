import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCardImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  margin: 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const CardImg = ({ src, alt }) => (
  <StyledCardImg alt={alt ? alt : null} src={src}></StyledCardImg>
);

CardImg.propTypes = {
  /**
   * Enter an image source for the card
   */
  src: PropTypes.string.isRequired,
  /**
   * Enter alt text for accessibility
   */
  alt: PropTypes.string.isRequired,
};

CardImg.defaultProps = {
  alt: null,
  src: null,
};

import React from "react";
import PropTypes from "prop-types";
import "./card.css";

export const CardImg = ({ src, alt }) => (
  <img className="card__img" alt={alt ? alt : null} src={src}></img>
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

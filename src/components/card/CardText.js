import React from "react";
import PropTypes from "prop-types";
import "./card.css";

export const CardText = ({ children }) => (
  <p className="card__text">{children}</p>
);

CardText.propTypes = {
  /**
   * Pass children to include text.
   */
  children: PropTypes.string.isRequired,
};

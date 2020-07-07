import React from "react";
import PropTypes from "prop-types";
import "./card.css";

export const Card = ({ children }) => (
  <article className="card flat bottom-right">{children}</article>
);

Card.propTypes = {
  /**
   * Card will take a child prop but should only be passed sub components
   */
  children: PropTypes.string.isRequired,
};

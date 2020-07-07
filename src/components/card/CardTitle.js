import React from "react";
import PropTypes from "prop-types";
import "./card.css";

export const CardTitle = ({ children }) => (
  <h1 className="card__title">{children}</h1>
);

CardTitle.propTypes = {
  /**
   * Pass children to include text.
   */
  children: PropTypes.string.isRequired,
};

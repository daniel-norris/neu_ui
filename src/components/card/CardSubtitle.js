import React from "react";
import PropTypes from "prop-types";
import "./card.css";

export const CardSubtitle = ({ children }) => (
  <h2 className="card__subtitle">{children}</h2>
);

CardSubtitle.propTypes = {
  /**
   * Pass children to include text.
   */
  children: PropTypes.string.isRequired,
};

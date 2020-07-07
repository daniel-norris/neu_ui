import React from "react";
import PropTypes from "prop-types";
import "./card.css";

export const CardBody = ({ children }) => (
  <section className="card__body">{children}</section>
);

CardBody.propTypes = {
  /**
   * Pass children pass text into the Card content.
   */
  children: PropTypes.string.isRequired,
};

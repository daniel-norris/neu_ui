import React from "react";
import "./button.css";
import PropTypes from "prop-types";

const Button = ({ children, size }) => (
  <button
    className={
      size === "lg" ? "btn-lg flat bottom-right" : "btn-sml flat bottom-right"
    }
  >
    {children}
  </button>
);

const sizes = {
  sml: "sml",
  lg: "lg",
};

Button.propTypes = {
  /**
   * Pass children to label the button.
   */
  children: PropTypes.string.isRequired,
  /**
   * Choose the size of button.
   */
  size: PropTypes.oneOf(Object.keys(sizes)),
};

export default Button;

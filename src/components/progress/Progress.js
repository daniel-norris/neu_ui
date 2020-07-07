import React from "react";
import Label from "../forms/Label";
import PropTypes from "prop-types";

import "./progress.css";

const Progress = ({ id, children, max, value }) => (
  <>
    <div>
      <Label htmlFor={id}>{children}</Label>
      <progress id={id} max={max} value={value}></progress>
    </div>
  </>
);

Progress.propTypes = {
  /**
   * Pass children to label the progress bar.
   */
  children: PropTypes.string,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  /**
   * ID for progress bar.
   */
  id: PropTypes.string,
  /**
   * For attribute for label.
   */
  htmlFor: PropTypes.string,
};

export default Progress;

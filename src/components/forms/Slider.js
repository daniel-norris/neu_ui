import React from "react";
import "./slider.css";

const Slider = ({ min, max }) => (
  <input type="range" className="form__slider" min={min} max={max}></input>
);

export default Slider;

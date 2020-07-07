import React, { Component } from "react";
import "./toggle.css";

export class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const { clicked } = this.state;
    const { color } = this.props;

    return (
      <div className="mb-2 flex align-items-center">
        <div className="flat toggle-bg">
          <button
            id="toggle"
            className={
              clicked
                ? "bottom-right-nohighlight toggle toggle-on"
                : "bottom-right-nohighlight toggle toggle-off"
            }
            onClick={this.handleClick}
          ></button>
        </div>
        <div className="toggle__light flex justify-contents-center">
          <div
            id="toggle__light"
            className={clicked ? "toggle__light-bg-on" : "toggle__light-bg"}
            style={
              clicked
                ? {
                    backgroundColor: color,
                    width: ".6rem",
                    height: ".6rem",
                  }
                : {
                    backgroundColor: "rgb(223, 223, 223)",
                    margin: "auto",
                    borderRadius: "1rem",
                    width: ".7rem",
                    height: ".7rem",
                  }
            }
          ></div>
        </div>
      </div>
    );
  }
}

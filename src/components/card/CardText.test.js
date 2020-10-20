import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { CardText } from "./CardText";

describe("CardText test suite", () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders CardBody children props", () => {
    act(() => {
      render(<CardText>CardText Text</CardText>, container);
    });

    expect(container.textContent).toBe("CardText Text");
  });
});

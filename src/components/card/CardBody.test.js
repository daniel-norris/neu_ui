import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { CardBody } from "./CardBody";

describe("CardHeader test suite", () => {
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
      render(<CardBody>CardBody Text</CardBody>, container);
    });

    expect(container.textContent).toBe("CardBody Text");
  });
});

import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { Check, Radio } from "./Check";

describe("Check test suite", () => {
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

  it("renders Check children props", () => {
    act(() => {
      render(<Check
        name="Check Name"
        label="Check Label"
        id="Check ID"
      />, container);
    });

    expect(container.textContent).toBe("Check Label");
  });

  it("renders Radio children props", () => {
    act(() => {
      render(<Radio
        name="Radio Name"
        label="Radio Label"
        id="Radio ID"
      />, container);
    });

    expect(container.textContent).toBe("Radio Label");
  });
});

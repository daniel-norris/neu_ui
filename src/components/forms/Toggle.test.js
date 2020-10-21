import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { Toggle } from "./Toggle";

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

  it("contains an input element with type 'checkbox'", () => {
    act(() => {
      render(<Toggle />, container);
    });

    const nativeCheckbox = document.querySelector("input");

    expect(nativeCheckbox.type).toBe("checkbox");
  });
});

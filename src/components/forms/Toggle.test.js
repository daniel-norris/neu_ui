import React from "react";
import { act, Simulate } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { Toggle } from "./Toggle";

describe("Toggle test suite", () => {
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

  it("toggles hidden input element on component click", () => {
    act(() => {
      render(<Toggle />, container);
    });

    const nativeCheckbox = document.querySelector("input");
    const checkboxButton = document.querySelector("button");

    expect(nativeCheckbox.checked).toBe(false);

    act(() => {
      Simulate.click(checkboxButton);
    });
    expect(nativeCheckbox.checked).toBe(true);

    act(() => {
      Simulate.click(checkboxButton);
    });
    expect(nativeCheckbox.checked).toBe(false);
  })
});

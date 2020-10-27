import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { ListItem } from "./ListItem";

describe("ListItem test", () => {
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

  it("renders Card children props", () => {
    const children = "I'm a Child to be rendered in the ListItem";
    act(() => {
      render(<ListItem>{children}</ListItem>, container);
    });

    expect(container.textContent).toBe(children);
  });
});

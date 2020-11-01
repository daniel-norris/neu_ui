import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { ListGroup } from "./ListGroup";

describe("ListGroup test", () => {
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

  it("renders ListGroup children props", () => {
    const text = "I'm a Child to be rendered in the ListGroup";
    act(() => {
      render(
        <ListGroup>
          <div key={1}>{text}</div>
          <div key={2}></div>
        </ListGroup>,
        container
      );
    });

    expect(container.textContent).toBe(text);
  });

  it("renders ListGroup children props", () => {
    const text = "I'm a Child to be rendered in the ListGroup";
    act(() => {
      render(
        <ListGroup horizontal={true}>
          <div key={1}>{text}</div>
          <div key={2}></div>
        </ListGroup>,
        container
      );
    });

    expect(container.textContent).toBe(text);
  });
});

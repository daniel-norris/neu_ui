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

  it("renders ListItem children props", () => {
    const children = "I'm a Child to be rendered in the ListItem";
    act(() => {
      render(<ListItem>{children}</ListItem>, container);
    });

    expect(container.textContent).toBe(children);
  });

  it("renders ListItem children props horizontal", () => {
    const children = "I'm a Child to be rendered in the ListItem";
    act(() => {
      render(
        <ListItem horizontal={true} disabled={true}>
          {children}
        </ListItem>,
        container
      );
    });

    expect(container.textContent).toBe(children);
  });

  it("renders a 'link' child", () => {
    const children = "I'm a Child to be rendered in the ListItem";
    act(() => {
      render(<ListItem type="link">{children}</ListItem>, container);
    });

    expect(container.textContent).toBe(children);
  });

  it("renders a 'button' child", () => {
    const children = "I'm a Child to be rendered in the ListItem";
    act(() => {
      render(<ListItem type="button">{children}</ListItem>, container);
    });

    expect(container.textContent).toBe(children);
  });

  it("renders a 'link' child horizontal", () => {
    const children = "I'm a Child to be rendered in the ListItem";
    act(() => {
      render(
        <ListItem type="link" horizontal={true}>
          {children}
        </ListItem>,
        container
      );
    });

    expect(container.textContent).toBe(children);
  });

  it("renders a 'button' child horizontal", () => {
    const children = "I'm a Child to be rendered in the ListItem";
    act(() => {
      render(
        <ListItem type="button" horizontal={true}>
          {children}
        </ListItem>,
        container
      );
    });

    expect(container.textContent).toBe(children);
  });
});

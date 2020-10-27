import React from "react";
import { act } from "react-dom/test-utils";

import { render, unmountComponentAtNode } from "react-dom";

import { Toggle } from "./Toggle";


let container = null;
beforeEach(() => {
  // setting up DOM element as render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// tests whether the component renders
it("renders Toggle", () => {
  act(() => {
    render(<Toggle/>, container);
  });
  expect(container.children.length).toBe(1);
});

// tests structural integrity
it("checks Toggle structure", () => {
  act(() => {
    render(<Toggle/>, container);
  });
  expect(container.children.length).toBe(1);

  // background + indicator
  expect(container.children[0].children.length).toBe(3);
});

// tests on-click
it("checks on-click", () => {
  act(() => {
    render(<Toggle/>, container);
  });
  
  const check = container.children[0].firstChild;
  const indicatorOld = container.children[0].children[2];
  const indicatorColorOld = window.getComputedStyle(indicatorOld, null).getPropertyValue("background-color");

  act(() => {
    check.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const indicatorNew = container.children[0].children[2];
  const indicatorColorNew = window.getComputedStyle(indicatorNew, null).getPropertyValue("background-color");

  // Make sure we get valid colors, and that they are different.
  expect(indicatorColorOld.startsWith("rgb")).toBe(true);
  expect(indicatorColorNew.startsWith("rgb")).toBe(true);
  expect(indicatorColorOld.toString()).not.toBe(indicatorColorNew.toString());
});

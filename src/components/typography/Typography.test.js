import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { Typography } from "./Typography";

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

const variantValue = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
];

// Using each statement https://jestjs.io/docs/en/api#describeeachtablename-fn-timeout
// tests whether child content is rendered
describe("typography component testing", () => {
  test.each(variantValue)(
    "test Typography with %p as variant props",
    (typo) => {
      act(() => {
        render(
          <Typography variant={typo}>{"Test " + typo}</Typography>,
          container
        );
      });
      expect(container.textContent).toBe("Test " + typo);
    }
  );
});

import React from "react";
import { act } from "react-dom/test-utils";
import ReactDom from "react-dom";

import { Input } from "./Input";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("render input and update", () => {
  // Test first render
  act(() => {
    ReactDom.render(
      <Input placeholder="test" id="test" name="input" type="text" />,
      container
    );
  });
  const input = document.getElementById("test");
  expect(input.type).toBe("text");
  // Test second render and update
  act(() => {
    input.value = "test value";
  });
  expect(input.value).toBe("test value");
});

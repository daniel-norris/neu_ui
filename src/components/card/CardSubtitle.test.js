import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { CardSubtitle } from "./CardSubtitle";

describe('CardSubtitle test suite', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders Card Subtitle children props', () => {
    act(() => {
      render(<CardSubtitle>Subtitle Text</CardSubtitle>, container)
    });

    expect(container.textContent).toBe('Subtitle Text');
  })
});

import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

import { Progress } from './Progress';

describe('Progress test suite', () => {
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

  it('renders Progress children props', () => {
    act(() => {
      render(<Progress>Progress</Progress>, container);
    });

    expect(container.textContent).toBe('Progress');
  });
});

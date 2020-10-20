import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

import { Card } from './Card';

describe('Card test suite', () => {
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

  it('renders Card children props', () => {
    act(() => {
      render(<Card>Card Text</Card>, container);
    });

    expect(container.textContent).toBe('Card Text');
  });
});

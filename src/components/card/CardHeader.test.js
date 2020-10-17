import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

import { CardHeader } from './CardHeader';

describe('CardHeader test suite', () => {
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

  it('renders CardHeader children props', () => {
    act(() => {
      render(<CardHeader>Header Text</CardHeader>, container);
    });

    expect(container.textContent).toBe('Header Text');
  });
});

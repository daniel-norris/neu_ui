import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { CardTitle } from './CardTitle';

describe('CardTitle test suite', () => {
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

  it('renders CardTitle children props', () => {
    act(() => {
      render(<CardTitle>Card Title</CardTitle>, container);
    });

    expect(container.textContent).toBe('Card Title');
  });
});

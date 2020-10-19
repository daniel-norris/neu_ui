import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

import { CardImg } from './CardImg';

describe('CardImg test suite', () => {
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

  it('renders CardImg props', () => {
    act(() => {
      render(<CardImg src='test-src' alt='test-alt' />, container);
    });

    expect(document.querySelector('[src="test-src"]')).toBeTruthy();
    expect(document.querySelector('[alt="test-alt"]')).toBeTruthy();
  });
});

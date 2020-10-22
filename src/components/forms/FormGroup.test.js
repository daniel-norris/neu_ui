import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

import { FormGroup } from './FormGroup';

describe('FormGroup test suite', () => {
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

  it('renders FormGroup children props', () => {
    act(() => {
      render(<FormGroup>Form group component</FormGroup>, container);
    });

    expect(container.textContent).toBe('Form group component');
  });
});

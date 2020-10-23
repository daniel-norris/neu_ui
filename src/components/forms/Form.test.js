import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

import { Form } from './Form';

describe('Form test suite', () => {
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

  it('renders Form children props', () => {
    act(() => {
      render(<Form>Form Text</Form>, container);
    });

    expect(container.textContent).toBe('Form Text');
  });
});

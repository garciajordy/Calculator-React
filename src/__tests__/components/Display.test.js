import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from '../../components/Display';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Display result="some value" />);
  expect(asFragment(<Display result="some value" />)).toMatchSnapshot();
});

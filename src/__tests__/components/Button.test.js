import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from '../../components/Button';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Button handleClick={() => 'test'} name="5" />);
  expect(asFragment(<Button handleClick={() => 'test'} name="5" />)).toMatchSnapshot();
});

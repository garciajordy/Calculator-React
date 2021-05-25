import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Quote from '../../components/Quote';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment(<Quote />)).toMatchSnapshot();
});

it('Should display header information', () => {
  render(<Quote />);
  expect(screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.')).toBeInTheDocument();
});

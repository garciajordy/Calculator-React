import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Home from '../../components/Home';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment(<Home />)).toMatchSnapshot();
});
it('Should display header information', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  expect(screen.getByText('This is the number one math magicians website in the world with loads of fun quotes and apps!')).toBeInTheDocument();
});

import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import App from '../../components/App';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});
it('displays heading', () => {
  render(<App />);
  expect(screen.getByText('Ready to do some Maths?')).toBeInTheDocument();
});

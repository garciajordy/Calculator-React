import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ButtonPanel from '../../components/ButtonPanel';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<ButtonPanel handleClick={() => 'test'} />);
  expect(asFragment(<ButtonPanel handleClick={() => 'test'} />)).toMatchSnapshot();
});

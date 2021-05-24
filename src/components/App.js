/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculator from '../logic/calculate';

function App() {
  const [value, setValue] = useState({ total: '0' });
  const handleClick = (name) => {
    let newValue;
    if (value.total === '0') {
      newValue = '';
    } else {
      newValue = value.total;
    }

    if (name === 'AC') {
      setValue(value.total = { total: '0' });
    } else {
      newValue += name;
      setValue(value.total = { total: newValue });
    }
  };

  return (
    <>
      <Display result={value.total} />
      <ButtonPanel handleClick={handleClick} />
    </>
  );
}

export default App;

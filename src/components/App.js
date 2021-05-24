import { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculator from '../logic/calculate';

function App() {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (name) => {
    const data = { ...value };
    const result = Calculator(data, name);
    setValue({ ...result });
  };
  const { total, next } = value;

  return (
    <>
      <Display result={(next && next.toString()) || (total && total.toString())} />
      <ButtonPanel handleClick={handleClick} />
    </>
  );
}

export default App;

import { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculator from '../logic/calculate';
import '../styles/test.css';

function App() {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (name) => {
    const data = { ...value };
    const result = calculator(data, name);
    setValue({ ...result });
  };
  const { total, next } = value;

  return (
    <div>
      <h1>Ready to do some Maths?</h1>
      <div className="class1">
        <Display result={(next && next.toString()) || (total && total.toString())} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;

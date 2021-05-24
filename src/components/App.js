import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculator from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const handleClick = (name) => {
      const result = calculator(this.state, name);
      this.setState({ ...result });
    };
    const { next, total } = this.state;
    return (
      <>
        <Display result={(next && next.toString()) || (total && total.toString())} />
        <ButtonPanel handleClick={handleClick} />
      </>
    );
  }
}

export default App;

import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const num1 = Big(numOne);
  const num2 = Big(numTwo);

  if (operation === '/') {
    return numTwo !== '0' ? num1.div(num2) : 'No divisin by zero';
  } if (operation === 'X') {
    return num1.times(num2);
  } if (operation === '+') {
    return num1.plus(num2);
  } if (operation === '-') {
    return num1.minus(num2);
  }
  return 'not valid operation';
};

export default operate;

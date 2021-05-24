import Operate from './operate';

const calculate = (data, name) => {
  let { total, next, operation } = data;
  if (name === '+/-') {
    total *= -1;
    next *= -1;
    total.toString();
  }
  if (name === 'AC') {
    total = null;
    next = null;
    operation = null;
  }
  if (name === '%') {
    next /= 100;
    total /= 100;
  }

  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(name)) {
    if (!operation) {
      if (!total) {
        total = name;
      } else if (typeof total === 'number') {
        total = name;
      } else {
        total += name;
      }
    } else if (!next) {
      next = name;
    } else {
      next += name;
    }
  }
  if (name === '.') {
    if (!total) {
      total = '0.';
    }
    if (total && operation) {
      total += '.';
    }
    if (total && operation && next) {
      next += '.';
    }
    if (total && operation && !next) {
      next = '0.';
    }
  }

  if (['+', 'X', '/', '-'].includes(name)) {
    if (!total) total = '0';
    if (total && !next) {
      operation = name;
    }
    if (total && next && operation) {
      total = Operate(total, next, operation);
      next = null;
      operation = name;
    }
  }

  if (name === '=') {
    if (total && !next) {
      return total;
    }
    if (!total && !next) {
      total = '0';
    }
    if (total && next && operation) {
      total = Operate(total, next, operation);
      next = null;
      operation = name;
    }
  }
  return { total, next, operation };
};
export default calculate;

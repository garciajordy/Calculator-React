import operate from '../../logic/operate';

describe('Calculate operations', () => {
  it('Should return an object', () => {
    const result = operate('5', '4', '+');
    expect(typeof result).toEqual('object');
  });
  it('Should be a function', () => {
    expect(typeof operate).toEqual('function');
  });
  it('Should sum two numbers', () => {
    const result = operate('5', '1', '+');
    expect(result * 1).toBe(6);
  });
  it('Should sustrate two numbers value', () => {
    const result = operate('8', '10', '-');
    expect(result * 1).toEqual(-2);
  });
  it('Should return a divided value', () => {
    const result = operate('10', '5', '/');
    expect(result * 1).toEqual(2);
  });
  it('Should return a divided value', () => {
    const result = operate('7', '0', '/');
    expect(result).toEqual('ERROR can\'t divide by 0');
  });
  it('Should return a multipliyed value', () => {
    const result = operate('2', '4', 'X');
    expect(result * 1).toEqual(8);
  });
});

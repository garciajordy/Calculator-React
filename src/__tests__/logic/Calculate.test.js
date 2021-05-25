import Calculate from '../../logic/calculate';

const firstObject = { total: null, next: null, operation: null };
const secondObject = { total: '6', next: null, operation: null };

describe('Calculate methods', () => {
  it('Should be a function', () => {
    expect(typeof Calculate).toEqual('function');
  });
  it('Should not be an object', () => {
    expect(typeof Calculate).not.toEqual('object');
  });
  it('Should return an object', () => {
    const result = Calculate(firstObject, 9);
    expect(typeof result).toEqual('object');
  });
  it('Should total be a number', () => {
    const result = Calculate(secondObject, 9);
    const value = (result.total * 1);
    expect(typeof value).toEqual('number');
  });
  it('Should return null object', () => {
    const result = Calculate(firstObject, 'AC');
    expect(result).toStrictEqual({ next: null, operation: null, total: null });
  });
  it('Should return a decimal value', () => {
    const result = Calculate(firstObject, '.');
    expect(result).toStrictEqual({ next: null, operation: null, total: '0.' });
  });
  it('Should return a negative value', () => {
    const result = Calculate(secondObject, '+/-');
    expect(result).toStrictEqual({ next: -0, operation: null, total: -6 });
  });
  it('Should return a percent value', () => {
    const result = Calculate(secondObject, '%');
    expect(result).toStrictEqual({ next: 0, operation: null, total: 0.06 });
  });
  it('Should return a negative value', () => {
    const result = Calculate({ total: '6', next: '10', operation: '+' }, '=');
    expect(result.total * 1).toEqual(16);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should return a sustrated value', () => {
    const result = Calculate({ total: '6', next: '10', operation: '-' }, '=');
    expect(result.total * 1).toEqual(-4);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should return a multiplied value', () => {
    const result = Calculate({ total: '6', next: '10', operation: 'X' }, '=');
    expect(result.total * 1).toEqual(60);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should return a divided value', () => {
    const result = Calculate({ total: '6', next: '10', operation: '/' }, '=');
    expect(result.total * 1).toEqual(0.6);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should not be a number divid by zero', () => {
    const result = Calculate({ total: '6', next: '0', operation: '/' }, '=');
    expect(result.total * 1).toEqual(NaN);
    expect(typeof result.total).not.toEqual('number');
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
});

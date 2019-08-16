
import { sum } from '../functions/sum';

it('sum the numbers', () => {
  //toEqual() works with object and array
  expect(sum(4, 5)).toEqual(9);
  expect(sum(3, -1)).toEqual(2);
  expect(sum('fsfsf', 'fsfs')).toEqual('This is not a number');

  //this only works with singular data
  expect(sum(3, 5)).toBe(8);
  expect(sum(3, 5)).not.toBe(9);

});


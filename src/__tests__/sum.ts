
import { sum } from '../functions/sum';

it('sum the numbers', () => {
  expect(sum(4, 5)).toEqual(9);
  expect(sum(3, -1)).toEqual(2);
  expect(sum('fsfsf', 'fsfs')).toEqual('This is not a number');
});


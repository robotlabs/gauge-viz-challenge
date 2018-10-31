import {percPi} from './utils.js';

test('test percPi', () => {
  const pi = Math.PI; 
  expect.assertions(2);
  expect(percPi(50, 0, 100)).toBeGreaterThanOrEqual(-pi / 1);
  expect(percPi(25, 0, 50)).toBeLessThanOrEqual(pi / 2);
});
const findFirstNumber = require('../tasks/task#86');

describe('Testing of function findFirstNumber', () => {

  test('It should be defined', () => {
    expect(findFirstNumber).toBeDefined();
  });

  test('It should have one argument', () => {
    expect(findFirstNumber).toHaveLength(1);
  });

  test('It should return a number', () => {
    expect(typeof findFirstNumber(57)).toBe('number');
  });

  test('It should put return the first digit of a number', () => {
    expect(findFirstNumber(1)).toEqual(1);
    expect(findFirstNumber(23)).toEqual(2);
    expect(findFirstNumber(4812)).toEqual(4);
  });
});

const power = require('../tasks/task#78');

describe('Testing of function power', () => {

  test('It should be defined', () => {
    expect(power).toBeDefined();
  });

  test('It should have two arguments', () => {
    expect(power).toHaveLength(2);
  });

  test('It should return a number', () => {
    expect(typeof power(2,3)).toBe('number');
  });

  test('It should put number to the power', () => {
    expect(power(2,3)).toEqual(8);
    expect(power(-2,3)).toEqual(-8);
    expect(power(0,3)).toEqual(0);
    expect(power(2,0)).toEqual(1);
    expect(power(-Infinity,0)).toEqual(1);
    expect(power(Infinity,0)).toEqual(1);
    expect(power(Infinity,3)).toEqual(Infinity);
  });
});

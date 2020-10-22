const removeIndex = require('../tasks/task#632');

describe('Testing of function removeIndex', () => {

  test('It should be defined', () => {
    expect(removeIndex).toBeDefined();
  });

  test('It should have three or more argument', () => {
    expect(removeIndex.length).toBeGreaterThanOrEqual(3);
  });

  test('It should return an array', () => {
    expect(Array.isArray(removeIndex(3, -3))).toBe(true);
  });

  test('It should remove and insert an element', () => {
    expect(removeIndex(1, -100)).toEqual([-100,-10,-5,-1, 0, 3, 4, 6, 9, 45, 98, 145]);
  });
  test('It should remove and insert an element', () => {
    expect(removeIndex(5, -100)).toEqual([-100,-24,-10,-5,-1, 3, 4, 6, 9, 45, 98, 145]);
  });
  test('It should remove and insert an element', () => {
    expect(removeIndex(12, -100)).toEqual([-100,-24,-10,-5,-1, 0, 3, 4, 6, 9, 45, 98]);
  });
  test('It should remove and insert an element', () => {
    expect(removeIndex(1, 0)).toEqual([-10,-5,-1, 0, 0, 3, 4, 6, 9, 45, 98, 145]);
  });
  test('It should remove and insert an element', () => {
    expect(removeIndex(5, 0)).toEqual([-24,-10,-5,-1, 0, 3, 4, 6, 9, 45, 98, 145]);
  });
  test('It should remove and insert an element', () => {
    expect(removeIndex(12, 0)).toEqual([-24,-10,-5,-1, 0, 0, 3, 4, 6, 9, 45, 98]);
  });
  test('It should remove and insert an element', () => {
    expect(removeIndex(1, 100)).toEqual([-10,-5,-1, 0, 3, 4, 6, 9, 45, 98, 100, 145]);
  });
  test('It should remove and insert an element', () => {
    expect(removeIndex(5, 100)).toEqual([-24,-10,-5,-1, 3, 4, 6, 9, 45, 98, 100, 145]);
  });
  test('It should remove and insert an element', () => {
    expect(removeIndex(12, 100)).toEqual([-24,-10,-5,-1, 0, 3, 4, 6, 9, 45, 98, 100]);
  });
});

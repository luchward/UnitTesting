const Lodash = require('./sync');

describe('Lodash compact', () => {
  let _ = new Lodash();
  let array;

  beforeEach(() => {
    array = [false, 45, 0, '', true, null, 'hello'];
  });


  test('should be defined', () => {
    expect(_.compact).toBeDefined();
  });

  test('should remove falsy values from an array', () => {
    const result = [45, true, 'hello']
    expect(_.compact(array)).toEqual(result);
  });
});

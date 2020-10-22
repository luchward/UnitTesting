function expect(value) {
  return {
    toBe: exp => {
      if (exp === value) {
        console.log('Success')
      } else {
        console.log(`Value is ${value}, but expectation is ${exp}`);
      }
    }
  }
}

const sum = (a, b) => a + b;

const nativeNull = () => null;

module.exports = {sum, nativeNull};

// expect(sum(34, 15)).toBe(49);

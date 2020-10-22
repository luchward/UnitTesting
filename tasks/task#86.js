/*
86. Дано натуральное число n.
в) Найти первую цифру числа n
 */

function findFirstNumber(n){
  let firstNumber=Number(String(n)[0]);
  return firstNumber;
}

module.exports = findFirstNumber;

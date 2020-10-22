/*
78. Даны действительное число a, натуральное число n.
Вычислить:
а) аn;
 */

function power(a, n){
  let result=1;
  for(let i=0; i<n; i++){
    result*=a;
  }
  return result;
}

module.exports = power;

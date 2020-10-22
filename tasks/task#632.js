/*
632. Даны действительные числа a1,…, an, p, натуральное число
k (a1≤ a2≤…≤ an, k≤ n). Удалить из a1, …, an элемент с номером k (т. е.
ak) и вставить элемент, равный p, так, чтобы не нарушилась
упорядоченность.
 */

function removeIndex(k, p){
  let arr=[-24,-10,-5,-1, 0, 3, 4, 6, 9, 45, 98, 145];
  if(k<=arr.length){
    arr.splice(k-1, 1);
  }
  else{
    return -1;
  }
  console.log(arr);
  arr.find((value, index)=>{
      if(value>p){
        arr.splice(index, 0, p);
        return index;
      }
      else{
        arr.push(p)
        return 1;
      }
    }
  );
  return arr;
}

// function removeIndex(k, p) {
//   let array = [-24,-10,-5,-1, 0, 3, 4, 6, 9, 45, 98, 145];
//   array.splice(k - 1, 1);
//   const idx = array.findIndex((item, index) => item >= p);
//   idx >= 0 ? array.splice(idx, 0, p) : array.push(p);
//   return array;
// }

module.exports = removeIndex;

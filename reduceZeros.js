// Reduce series of 0s to a single 0.
// [2,0,0,0,1,4] Returns [2,0,1,4]

function reduceZeros(array){
  // base case
  if (array.length === 0) { return array }

  var head = array[0];
  var tail = array.slice(1);

  var result = reduceZeros(tail);
  
  if (result[0] === 0 && head === 0) {
    return result
  } else {
    return [head].concat(result);
  }
}
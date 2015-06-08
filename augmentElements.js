// Augument every element in a list with a new value. The elemts are lists themselves.
// [[],[3],[7]] , 5
// Returns [[5],[3,5],[7,5]]

function augmentElements(array, val){
  // base case
  if (array.length === 0) { return array }

  var head = array[0];
  var tail = array.slice(1);

  var result = augmentElements(tail, val);

  return [head.concat([val])].concat(result);

}
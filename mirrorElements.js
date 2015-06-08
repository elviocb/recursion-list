// Mirror the elements of a list and append them.
// [2,7,8,3,1,4]
// Returns [2,7,8,3,1,4,4,1,3,8,7,2]

function mirrorElements(array) {
  // base case
  if (array.length === 0) { return array }

  var head = array[0];
  var tail = array.slice(1);

  var result = mirrorElements(tail);
  return [head].concat(result).concat([head]);
}
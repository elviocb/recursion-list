// Create a new list with a given value and length.
// 0, 5
// Returns [0,0,0,0,0]
// 7, 3
// Returns [7,7,7]

function createList(val, qty){
  // base case
  if(qty === 0) { return []}

  var result = createList(val, qty - 1);

  return result.concat([val]);
}
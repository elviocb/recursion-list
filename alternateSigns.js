// Alternate the numbers sign regardless of their original sign.
// Start with +;
// [2,7,8,3,1,4]
// Returns [2,-7,8,-3,1,-4]
// [-5,-3,7,1,-6,2]
// Returns [5,-3,7,-1,6,-2]

function alternateSigns(array){
  // base case
  if (array.length === 0) { return array }

  var head1 = array[0];
  var head2 = array[1];
  var tail = array.slice(2);

  var result = alternateSigns(tail);

  if (head1 < 0) {
      head1 = -head1
  } 
  if (head2 > 0){
      head2 = -head2
  }

  return [head1, head2].concat(result);
}
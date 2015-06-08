// Set every list as the last item of the previous list. Return on the root list.
// [[4,3],[5,6],[8,2]] Returns [4,3,[5,6,[8,2]]]

function previousList(array) {
  // base case
  if (array.length === 1) { return array[0]}

  var head = array[0];
  var tail = array.slice(1);

  var result = previousList(tail);

  return head.concat([result])
}
// Swap all elements in pairs. If the length of the list is odd, the last element stays in place.
// [2,7,8,3,1,4]
// Returns [7,2,3,8,4,1]
// [3,6,8,1,5]
// Returns [6,3,1,8,5]

function swapPairs(array) {
    // base case
    if (array.length <= 1) { return array }

    var head1 = array[0];
    var head2 = array[1];
    var tail = array.slice(2);

    var result = swapPairs(tail);

    return [head2, head1].concat(result);
}
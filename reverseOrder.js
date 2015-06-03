// Reverse the order of the list.
// [2,7,8,3,1,4]
// Returns [4,1,3,8,7,2]

function reverseOrder(array) {
    // base case
    if (array.length === 1) { return [array[0]] }

    var head = array[0];
    var tail = array.slice(1);

    var res = reverseOrder(tail);

    return res.concat([head]);
}
// Given a list of lists of numbers, return a flat list of all numbers.
// [[2,7], [8,3], [1,4]] Returns [2,7,8,3,1,4]

function flatList(array){
    // base case
    if (array.length === 1) { return array[0] }

    var head = array[0];
    var tail = array.slice(1);

    var result = flatList(tail);

    return head.concat(result);

}
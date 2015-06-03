// Put element pairs in their own list. If you have an odd number of elements, add a 0.
// [2,7,8,3,1,4]
// Returns [[2,7], [8,3], [1,4]]
// [3,6,8,1,5]
// Returns [[3,6],[8,1],[5,0]]

function pairElemOwnList(array) {
    // base case
    if (array.length === 0) { 
        return array; 
    } else if (array.length === 1) {
        return [array.concat([0])];
    }

    var head1 = array[0];
    var head2 = array[1];
    var tail = array.slice(2);

    var result = pairElemOwnList(tail);

    return [[head1, head2]].concat(result);
}
// Put every element into its own list.
// [2,7,8,3,1,4]
// Returns [[2], [7], [8], [3], [1], [4]]

function ownList(array){
    // base case
    if (array.length === 1) {return [[array[0]]]}
    
    var head = array[0];
    var tail = array.slice(1);

    var recurse = ownList(tail);
    
    console.log(recurse);
    
    return [[head]].concat(recurse);
}
// Count the occurences of an element inside a list.
// [2,7,4,4,1,4], 4 Returns 3

function occ(arr, target){
    // base case 
    if (arr.length === 0) { return 0 }
    // head
    var head = arr[0];
    // tail
    var tail = arr.slice(1);
    // invoke the recursion, at the end it will return 0
    var result = occ(tail, target);
    // if the head is equal the target, add +1 to result and return result
    if (head === target) { return result + 1}
    
    return result;
}

// Find the maximum value in a list.
// [2,7,8,3,1,4] Returns 8

function max(array) {
    // base case
    if (array.length === 1) { return array[0] }

    // define the head
    var head = array[0];
    // define the tail
    var tail = array.slice(1);
    // invoke the recursion 
    var m = max(tail);

    return m > head ? m : head;
}
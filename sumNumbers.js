// Add up all numbers in the list.
// [2,7,8,3,1,4] Returns 25

function sumNumbers(array) {
    // base case 
    if (array.length === 1) { return array[0] }

    var head = array[0];
    var tail = array.slice(1);

    var result = sumNumbers(tail);

    return result + head;
}
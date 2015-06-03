// Return a list only containing even numbers.
// You can check for an even number by using a % 2 === 0;
// [2,7,8,3,1,4] Returns [2,8,4]

function evenNumbers(array) {
    // base case
    if (array.length === 0) { return array}

    var head = array[0];
    var tail = array.slice(1);

    var result = evenNumbers(tail);

    if(head % 2 === 0) { 
        return [head].concat(result)
    }
    return result;
}
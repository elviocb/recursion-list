// Split a list of numbers with regard to a pivot element. All elements smaller than the pivot element go in the first return list, all other elements go into the second return list. Both return list are inside one list.
// [2,7,8,3,1,4] , 4
// Returns [[2,3,1],[7,8,4]]

function splitPivotList(array, pivot) {
    // base case
    if (array.length === 1) { 
        if (array[0] >= pivot) {
            return [[],array]
        } else {
            return [array,[]]
        }
    }

    var head = array[0];
    var tail = array.slice(1);

    var result = splitPivotList(tail, pivot);
    
    if (head >= pivot) {
        result[1].unshift(head);
        return result;
    } else {
        result[0].unshift(head);
        return result;
    }
}
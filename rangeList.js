// Create a range list counting from a start to an end. Excluding the end.
// 2,5
// Returns [2,3,4]
// 8,1
// Returns [8,7,6,5,4,3,2]
// 3,3 Returns []

function rangeList(start, end){
  // base case 
  if (start === end) { return [] }

  if (start < end) {
    var result = rangeList(start +1, end);
  } else {
    var result = rangeList(start -1, end);
  }
  
  return [start].concat(result);
} 
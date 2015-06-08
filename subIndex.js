// Return a sublist of a given list, provided the starting Index (including) and an end Index (excluding).
// [2,7,8,3,1,4] , 2, 4 Returns [8,3]
// [4,2,7,9,7] , 1, 4 Returns [2,7,9]

function subIndex (array, startIdx, endIdx) {
  // base case 
  if (endIdx === 1) { return array[0] }

  var head = array[0];
  var tail = array.slice(1);

  var result = subIndex(tail, startIdx -1, endIdx -1);
  
  var conc = [head].concat(result);

  return (endIdx - startIdx) === conc.length -1 ? result : conc;
  
}
// Return true or false, if a given list starts with a sublist.
// [2,7,8,3,1,4] , [2,7] Returns true
//   Returns false

function sublistValidation (array, valid) {
  // base case
  if (valid.length === 0) {
    return true;
  } else if (valid[0] !== array[0]) {
    return false;
  }

  var tail1 = array.slice(1);
  var tail2 = valid.slice(1);

  var result = sublistValidation(tail1, tail2);
  
  return result;
}
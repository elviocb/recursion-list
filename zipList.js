// Zip two lists of numbers. If one list is shorter, just append the rest of the other list. First element comes from the first list.
// [2,7,8,3,1,4], [9,5,1] Returns [2,9,7,5,8,1,3,1,4]

function zipList(list1, list2){
  // base case
  if (list1.length === 0 || list2.length === 0) { 
    return list1.concat(list2); 
  }

  var head1 = list1[0];
  var head2 = list2[0];
  var tail1 = list1.slice(1);
  var tail2 = list2.slice(1);

  var result = zipList(tail1, tail2);

  return [head1, head2].concat(result);

}   


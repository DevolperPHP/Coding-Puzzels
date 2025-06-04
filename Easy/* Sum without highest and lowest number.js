/*
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/
function sumArray(array) {
  
  if (!Array.isArray(array) || array.length <= 2) return 0
  
  var max = Math.max(...array)
  var min = Math.min(...array)
  
  var total = array.reduce((a, b) => a + b)
  
  return total - (max+min)
}

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/
function highAndLow(numbers){
  var fixed = numbers.split(" ").map(Number)
  var max = fixed[0], min = fixed[0]
  
  for(var i = 0; i < fixed.length; i++){
    if(fixed[i] > max){
      max = fixed[i]
    }
    
    if(fixed[i] < min){
      min = fixed[i]
    }
  }
  
  return `${max} ${min}`
}

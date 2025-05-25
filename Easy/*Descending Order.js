/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
  if(n < 10) return n;
  var fixed = n.toString().split("").map(Number)
  for(var i = 0; i < fixed.length; i++){
    for(var j = 0; j < fixed.length; j++){
          var temp = fixed[i]
      if(fixed[j] < fixed[i]){
        fixed[i] = fixed[j];
        fixed[j] = temp
      }
    }
  }
  
 return Number(fixed.join(""))

}

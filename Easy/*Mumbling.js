/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  var test = s.split('')
  for(var i = 0; i < test.length; i++){
    if((test[i].charCodeAt(0)) > 90){
      test[i] = String.fromCharCode(test[i].charCodeAt(0) - 32)
    }
    
    for(var j = 0; j < i; j++){
      test[i] += String.fromCharCode(test[i].charCodeAt(0) + 32)
    }
  }
  
  return test.join('-')
}

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
  var string = []
  var arr = name.split(" ")
  for(var i = 0; i < arr.length; i++){
    string.push(arr[i].charAt(0).toUpperCase())
  }
  return string.join(".")
}

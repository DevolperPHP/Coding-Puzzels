/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

"bitcoin take over the world maybe who knows perhaps" -> 3
"Let's travel abroad shall we" -> 2

*/

function findShort(s){
  var arr = s.split(" ")
  var counter = arr[0].length
  
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length < counter){
      counter = arr[i].length
    }
  }
  
  return counter
}

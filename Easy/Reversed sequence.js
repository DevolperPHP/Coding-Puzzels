/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
  var seq = []
  if(n > 0){
    for(var i = n; i > 0; i--){
      seq.push(i)
    }
  }
  return seq
};

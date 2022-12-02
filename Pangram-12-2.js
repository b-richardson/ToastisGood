// Detect if the string includes every letter of the alphabet. Return true if yes and false if no

function isPangram(string){
    //...
    let s = string.toLowerCase();
    let arr = s.split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
   
    console.log(arr)
    
    let result = alphabet.every(x => arr.includes(x));
    return result;
  }
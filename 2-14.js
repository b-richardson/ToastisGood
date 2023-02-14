// Complete the solution so that the function will break up camel casing, using a space between words.

// EXAMPLE BELOW:
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let answerfinal = string.replace(/[A-Z]/g, " $&");
    
  
    return answerfinal
  }
// count the number of occurances of the characters in the string

function count (string) {  
    // The function code should be here
  //   take the input string and split it
  //   then take the split string and sort a-b
  //   following that, we need to count/tally the amount of each character in the string
  //   now we need to present these in the correct format
  //   if string is empty return an empty object literal
    
    
        if(string === ''){
          return {}
        }
    const str = string
  const counts = Object.create({});
  
  
  for (const ch of str) {
      const count = counts[ch] ?? 0;
  
  
      counts[ch] = count + 1;
  }
  
  
  for (const ch in counts) {
    return counts
    console.log(counts)
  }
    
  
  }
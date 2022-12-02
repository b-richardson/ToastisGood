// Replace the letters in a string with the number of the alphabet they are. return a string

function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
      console.log(alphabet)
    let arr = text.toLowerCase().replace(/[^a-z]/gi, '');
    let myarr = arr.split("")
     console.log(myarr)
    
     if((/[a-z]/.test(arr)) == false ){
     console.log('No letters found!')
   }
   
   let result = myarr.map(x => alphabet.indexOf(x) + 1);
   console.log(result.join(" "))
   return (result.join(" "))
  
 
   
   
 //   text = result.splice(0)
 //   console.log(text.toString())
 //   return (text.toString())
 
   }
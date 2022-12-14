// Convert a given interger into an interger containing the original one's digits to the second power.

function squareDigits(num){
    console.log(num)
   console.log(typeof num)
     
     let array1 = num.toString()
     let map1 = array1.split('')
     let sand = map1.map(e => e * e)
     let array2 = sand.join('')
     let array3 = (+array2)
     
     console.log(typeof array3)
     
     console.log(array1,map1,sand,array2,array3)
     return array3
   }
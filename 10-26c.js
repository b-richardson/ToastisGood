// Given two arrays containing 3 integers equaling a cuboid number, find the difference of the cuboids' volumes regardless of which is bigger.


function findDifference(arr1, arr2) {
    //loading...
    console.log(arr1)
      let myValue = arr1.reduce((a,b)=> a*b)
      console.log(myValue)
    console.log(arr2)
      let myValue2 = arr2.reduce((a,b)=> a*b)
      console.log(myValue2)
      
      return(Math.abs(myValue - myValue2))
  }
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// This solutino has a time complexcity of O(n), mainly due to the size of the  arrays. Normally, in Chrome, array.sort uses Timsort, which is a O(n log(n)) time complexcity. 

function solution(nums){
    if(nums != null){
       nums.sort((a,b) => a-b)
      console.log(nums)
      return(nums)
    }else{
      return([])
    }
  }
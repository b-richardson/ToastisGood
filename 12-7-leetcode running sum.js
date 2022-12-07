// Running Sum


var runningSum = function(nums) {
    let count  = 0
    let ans = []
   
   
    for(let i = 0; i < nums.length; i++){
        count += nums[i];
        ans.push(count)
        
        console.log(count)
        }
        console.log(ans);
        return ans;
        
    
       
   };
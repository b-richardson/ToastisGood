// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

//  Brute Force Solution
// Time Complexcity log(n)


var findDuplicate = function(nums) {
    let sorted = nums.sort((a,b) => a - b);
    console.log(sorted)

    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] === sorted[i+1]){
            return (sorted[i])
        }
    }
}
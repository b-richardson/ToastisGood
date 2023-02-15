// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    let sorted = nums.sort()

    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] == sorted[i + 1]){
            console.log('oh yeah')
            return true
        }else{
            console.log('oh noooo')
        }
    }

    return false

}
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

var missingNumber = function(nums) {
    let sorted = nums.sort((a,b) => a-b)
    console.log(sorted)
    console.log(sorted[0])
    console.log(sorted[1] + 1)

    for(let i = 0; i < nums.length - 1; i++){
        if(sorted[i + 1] == sorted[i] + 1){
            console.log('good to go')
        }else{
            return (sorted[i] + 1)
        }
    }
    return nums.length

};
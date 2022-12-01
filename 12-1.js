// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .


function lonelyinteger(a) {
    // Write your code here
    console.log(a)
    if(a.length === 1){
        console.log('not acceptable')
        return a
    }
    let nums = a.sort();
    for(let i=0; i<nums.length; i++){
        if(nums[i-1]===nums[i]){
           nums.splice(i-1,2);
            i=0;
        }
    }
    return nums[0];
}

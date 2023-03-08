// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Time Complexcity: O(n)
var sortedSquares = function(nums) {
    return nums.map(x => Math.pow(x,2)).sort((a,b) => a - b)
};
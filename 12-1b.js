// Return the difference between the sums of the left and right diagonal given a grid. ex: arr = ([1,2,3], [1,2,3], [1,2,3])


function diagonalDifference(arr) {
    // Write your code here
   
    let left = 0
    let right = 0
    let length = arr.length
    
    for (let i = 0; i < length; i++){
           left += arr[i][i];
           right += arr[i][length - i - 1];
            
        }
    return (Math.abs(left-right))
}
// return the min and max value of 4 out of the 5 interger's sums


function miniMaxSum(arr) {
    // console.log(arr)
    let myarr = arr.sort((a,b) => a - b)
    // console.log(myarr)
    let min = myarr.slice(0,4)
    let max = myarr.slice(1,5)
    let result = []
    
    // console.log(min)
    // console.log(max)
    
    let ans1 = min.reduce((a,b) => a + b)
    let ans2 = max.reduce((a,b) => a + b)
    
    result.push(ans1,ans2)
    // console.log(result)
    
    
    
    // console.log(ans1)
    console.log(`${ans1} ${ans2}`)
    return result
    return (`${ans1} ${ans2}`)
    
}
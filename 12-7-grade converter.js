// Take the sums of the 3 grades and return the grade for the semester

function getGrade (s1, s2, s3) {
    // Code here
    let arr = [s1, s2, s3]
    console.log (arr)
    let avg = Math.floor(arr.reduce((a,b) => a + b, 0) / arr.length)
    console.log(avg)
    let ans = ''
    
    if(avg >= 90 ){
      ans = 'A'
    }else if(avg >= 80){
      ans = 'B'
    }else if(avg >= 70){
      ans = 'C'
    }else if(avg >= 60){
      ans = 'D'
    }else{
      ans = 'F'
    }
    
    console.log(ans)
    return ans
  }
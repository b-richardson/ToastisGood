// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


function fakeBin(x){
    return (x.replace(/4/g, '0').replace(/3/g, '0').replace(/2/g, '0').replace(/1/g, '0').replace(/5/g, '1').replace(/6/g, '1').replace(/7/g, '1').replace(/8/g, '1').replace(/9/g, '1'))
    }
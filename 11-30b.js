
// Return the 12-hour time converted to 24-hour time as a string. 24-hour time has no need for AM or PM.


function timeConversion(s) {
    // Write your code here
    let arr = s.slice(0,-2).split(':')
    let hour = Number(arr[0])
    console.log(arr)
    console.log(hour)
    
    
    if(s.indexOf('P') > 0){
        console.log('its pm bitches')
        arr[0] = String((hour + 12))
        let myarr = arr.join(':')
        console.log(myarr)
        return myarr
    }else{
        console.log(s)
        return s
    }
}

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

// Attempt 2. This now works for 12:00:00AM

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
    }else if(s.indexOf('A') > 0 && arr[0] === '12'){
        console.log('its just past midnight')
        arr[0] = '00'
        let myarr = arr.join(':')
        return myarr
    }else{
        console.log(s)
        return arr.join(':')
    }
}

// This code can be refactored and made cleaner. Taking a lot of these steps outside the scope of the if function.

function timeConversion(s) {
    // Write your code here
    let arr = s.slice(0,-2).split(':')
    let hour = Number(arr[0])
    console.log(arr)
    console.log(hour)
    
    if(s.indexOf('P') > 0){
        console.log('its pm bitches')
        arr[0] = String((hour + 12))
    }else if(s.indexOf('A') > 0 && arr[0] === '12'){
        console.log('its just past midnight')
        arr[0] = '00'
    // }else{
    //    arr.join(':')
    }
    arr = arr.join(':')
    console.log(arr)
    return arr
}

// Final iteration with cleaner code and now accounts for it being 12PM and not adding 12 to the hour!
function timeConversion(s) {
    // Write your code here
    let arr = s.slice(0,-2).split(':')
    let hour = Number(arr[0])
    console.log(arr)
    console.log(hour)
    
    if(s.indexOf('P') > 0 && arr[0] != '12'){
        console.log('its pm bitches')
        arr[0] = String((hour + 12))
    }else if(s.indexOf('A') > 0 && arr[0] === '12'){
        console.log('its just past midnight')
        arr[0] = '00'
    }
    arr = arr.join(':')
    console.log(arr)
    return arr
}
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Brute Force Solution
var backspaceCompare = function(s, t) {
    let hold = []
    let hold2 = []
    let backspace = []
    let backspace2 = []
    let ans = null

    for(let i = 0; i < s.length; i++){
        if(s[i] === '#'){
            console.log('backspace')
            backspace.push(s[i])
            hold.pop()
        }else{
            hold.push(s[i])
        }

    }

        for(let i = 0; i < t.length; i++){
        if(t[i] === '#'){
            console.log('backspace')
            backspace2.push(t[i])
            hold2.pop()
        }else{
            hold2.push(t[i])
        }

    }
    console.log(hold)
    console.log(hold2)
    console.log(backspace)
    console.log(backspace2)
    console.log(hold.length)
    console.log(hold2.length)
    console.log(ans)
    let match = hold.length
    let match2 = hold2.length
    console.log(match, match2)

    if(match === match2){
        for(let i = 0; i < hold.length; i++){
            console.log(hold[i], hold2[i])
            if(hold[i] === hold2[i]){
                ans = true
            }else{
                ans = false
                console.log('ITS WRONG')
                return ans
                
            }
        }
    }else{
        ans = false
    }
    
    // for(let i = 0; i < hold.length; i++){
        // if(hold[i] === hold2[i]){
        //     ans = true
        // }else{
        //     ans = false
        // }
    //     if(hold.length !== hold2.length){
    //         console.log(hold.length)
    //         ans = false
    //     }else if(hold[i] === hold2[i]){
    //         console.log('boom')
    //         ans = true
    //     }
    // }

    return ans
};
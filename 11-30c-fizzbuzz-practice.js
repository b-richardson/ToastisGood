// Classic FizzBuzz. Print to console either the interger fizz or buzz or fizzbuzz based on if its a multiple of 3, 5, or BroadcastChannel.


function fizzBuzz(n) {
    // Write your code here
    let result = []
    
    for(let i = 1; i < n + 1; i++){
        if(i % 3 != 0 && i % 5 != 0){
            console.log(i)
            // result.push(i)
            // console.log(result)
        } else if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        }else if(i % 3 === 0){
            console.log('Fizz')
        }else{
            console.log('Buzz')
        }
        
    }
}
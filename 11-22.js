
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:



function areYouPlayingBanjo(name) {
    // Implement me
    console.log(name)
    let arr = (name.toLowerCase().split(``))
    console.log(arr)
    if(arr[0] ===  'r'){
      return(`${name} plays banjo`)
    } else {
      return(`${name} does not play banjo`)
    }
  }
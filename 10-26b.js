


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
      let newarr = birds.filter(e => e != 'African' && e != 'Roman Tufted' && e != "Toulouse" && e != "Pilgrim" && e != "Steinbacher")
      console.log(newarr)
      return (newarr)
    
    // return an array containing all of the strings in the input array except those that match strings in geese
  };
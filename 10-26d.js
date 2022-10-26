// Given an array of game scores [1:0], where the first number is the home score. Total up the points for win losses in a season to place where our team is in the championship.

// 1:0 = win = 3 points
// 0:0 = tie = 1 points
// 0:1 = loss = 0 points


function points(games) {
    console.log(games)
    let total = 0
    
    games.forEach(game => {
      const [x,y] = game.split(':').map(Number);
      console.log([x,y])
      
      if(x > y){
      total +=3
    }else if(x === y){
      total +=1
    }
    });
    
    
    return(total)
  }
let btn = document.querySelector("#gameButton")

let choices = [`rock`, `paper`, `scissors`]
function randomChoice() {
  let randomValue = Math.floor(Math.random()*choices.length)
  return randomValue
}

function computerPlay(){
  return choices[randomChoice()]
}

let computerPoints = 0;
let playerPoints = 0;

function match(playerSelection, computerSelection) {
  let playerChoice  = playerSelection.toLowerCase()

  if(playerChoice == computerSelection){
    return `It was a tie!`
  } else if ((playerChoice == `rock` && computerSelection == `scissors`) || (playerChoice == `scissors` && computerSelection == `paper`) || (playerChoice == `paper` && computerSelection == `rock`)){
    return `You win!`
  } else if ((computerSelection == `rock` && playerChoice == `scissors`) || (computerSelection == `scissors` && playerChoice == `paper`) || (computerSelection == `paper` && playerChoice == `rock`)) {
    return `You lose :(`
  } else {
    return `Enter rock, paper, or scissors`
  }
}

btn.addEventListener("click", game)

function game() {
  while(playerPoints < 5 && computerPoints < 5){
    let playerInput = prompt(`Rock, paper, or scissors`)
    let result = match(playerInput, computerPlay())
    if(result == `You win!`){
      alert(result)
      playerPoints += 1
    } else if (result == `You lose :(`){
      alert(result)
      computerPoints += 1
    } else if(result == `It was a tie!`) {
      computerPoints += 1
      playerPoints +=  1
      alert(result)
    }
    else
    alert(result)
  }
  if(playerPoints >= 5 && playerPoints > computerPoints){
    alert(`You've won 5 games and beat computer!!!!`)
    playerPoints = 0
    computerPoints = 0
  } else if (computerPoints >= 5 && computerPoints > playerPoints){
    alert(`You've lost, try again?`)
    playerPoints = 0
    computerPoints = 0
  }
}

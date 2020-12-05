let btn = document.querySelector("#gameButton")
let scrBrd = document.querySelector(`#ScoreBoard`)

let choices = [`rock`, `paper`, `scissors`]
function randomChoice() {
  let randomValue = Math.floor(Math.random()*choices.length)
  return randomValue
}

function computerPlay(){
  return choices[randomChoice()]
}

let gameStatus = 0;
let computerPoints = 0;
let playerPoints = 0;

btn.addEventListener(`click`, function(){
  gameStatus = 1;
  playerPoints = 0
  computerPoints = 0
  alert(`Game has begun`)
  scrBrd.textContent = `${playerPoints} : ${computerPoints}`

})

function match(playerSelection, computerSelection) {
  let playerChoice  = playerSelection.toLowerCase()

  if(playerChoice == computerSelection){
    return 0
  } else if ((playerChoice == `rock` && computerSelection == `scissors`) || (playerChoice == `scissors` && computerSelection == `paper`) || (playerChoice == `paper` && computerSelection == `rock`)){
    return 1
  } else if ((computerSelection == `rock` && playerChoice == `scissors`) || (computerSelection == `scissors` && playerChoice == `paper`) || (computerSelection == `paper` && playerChoice == `rock`)) {
    return -1
  } else {
    return `Enter rock, paper, or scissors`
  }
}

let rock = document.querySelector(`#rock`)
let paper = document.querySelector(`#paper`)
let scissors = document.querySelector(`#scissors`)

rock.addEventListener(`click`, function (){
  if(gameStatus == 1){
    let rockMatch = match(`rock`, computerPlay())
    if(rockMatch == 1){
      playerPoints++
    } else if (rockMatch == -1) {
      computerPoints ++
    }
  } else if (gameStatus == 0 && playerPoints < 1 && computerPoints < 1){
    alert(`Press game to begin`)
  }
scrBrd.textContent = `${playerPoints} : ${computerPoints}`
if(playerPoints >= 5){
  gameStatus = 0
  alert(`You have won! Press game to play again`)
} else if (computerPoints >= 5){
  gameStatus = 0
  alert(`You have lost, press game to play again`)
}
})

paper.addEventListener(`click`, function (){
  if(gameStatus == 1){
    let paperMatch = match(`paper`, computerPlay())
    if(paperMatch == 1){
      playerPoints ++
    } else if (paperMatch == -1){
      computerPoints ++
    }
  } else if (gameStatus == 0 && playerPoints < 1 && computerPoints < 1){
    alert(`Press game to begin`)
  }
scrBrd.textContent = `${playerPoints} : ${computerPoints}`
if(playerPoints >= 5){
  alert(`You have won! Press game to play again`)
  gameStatus = 0
} else if (computerPoints >= 5){
  alert(`You have lost, press game to play again`)
  gameStatus = 0
}
})

scissors.addEventListener(`click`, function (){
  if(gameStatus == 1){
    let scissorsMatch = match(`scissors`, computerPlay())
    if(scissorsMatch == 1){
      playerPoints ++
    } else if (scissorsMatch == -1){
      computerPoints ++
    }
  } else if (gameStatus == 0 && playerPoints < 1 && computerPoints < 1) {
    alert(`Press game to begin`)
  }
scrBrd.textContent = `${playerPoints} : ${computerPoints}`
if(playerPoints >= 5){
  alert(`You have won! Press game to play again`)
  gameStatus = 0
} else if (computerPoints >= 5){
  alert(`You have lost, press game to play again`)
  gameStatus = 0
}
})

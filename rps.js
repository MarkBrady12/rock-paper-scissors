let compChoice;
let playerChoice;

function getComputerChoice() {
    let compNumber = Math.floor(Math.random()*3)+1;

    if (compNumber ==  1) {
        compChoice = "rock";
    }
    else if (compNumber ==  2) {
        compChoice = "scissors";
    }
    else {
        compChoice = "paper";
    }
    return compNumber;
}

function getPlayerChoice() {
    playerChoice = prompt("Please enter your guess i.e. Rock, Paper, or Scissors:").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    
}

const playerSelection = playerChoice;
const computerSelection = compChoice;

getComputerChoice();
getPlayerChoice();
console.log(compChoice)
console.log(playerChoice)


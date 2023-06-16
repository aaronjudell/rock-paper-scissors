function getComputerChoice() {
    let result = 100 * Math.random();
    if (result <= 33) {
        return "rock";
    }
    else if (result <= 66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let input = "";
    let result = "";
    while (true) {
      input = prompt("Please choose Rock, Paper, or Scissors");
      result = input.toLowerCase();
      if (
        result == "rock" ||
        result == "paper" ||
        result == "scissors") {
            break;
        }
    }
    return result;
}

function playRPS(player1, player2) {
    switch (player1) {
        case "rock":
            if (player2 == "rock") {
                return "You Tie! You both chose Rock!";
            }
            else if (player2 == "paper") {
                return "You Lose! Paper beats Rock!";
            }
            else {
                return "You Win! Rock beats Scissors!";
            }
        case "paper":
            if (player2 == "rock") {
                return "You Win! Paper beats Rock!";
            }
            else if (player2 == "paper") {
                return "You Tie! You both chose Paper!";
            }
            else {
                return "You Lose! Scissors beats Paper!";
            }
        case "scissors":
            if (player2 == "rock") {
                return "You Lose! Rock beats Scissors!";
            }
            else if (player2 == "paper") {
                return "You win! Scissors beats Paper!";
            }
            else {
                return "You tie! You both chose Scissors!"
            }
    }
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(playRPS(playerSelection, computerSelection));
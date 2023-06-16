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

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
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
    statement.innerText = "";
    score.innerText = "";
    switch (player1) {
        case "rock":
            if (player2 == "rock") {
                statement.innerText = "You tied this round! You both chose Rock!";
                return;
            }
            else if (player2 == "paper") {
                computerScore += 1;
                statement.innerText =  "You lost this round! Paper beats Rock!";
                return;
            }
            else {
                playerScore += 1;
                statement.innerText =  "You won this round! Rock beats Scissors!";
                return;
            }
        case "paper":
            if (player2 == "rock") {
                playerScore += 1;
                statement.innerText =  "You won this round! Paper beats Rock!";
                return;
            }
            else if (player2 == "paper") {
                statement.innerText =  "You tied this round! You both chose Paper!";
                return;
            }
            else {
                computerScore += 1;
                statement.innerText =  "You lost this round! Scissors beats Paper!";
                return;
            }
        case "scissors":
            if (player2 == "rock") {
                computerScore += 1;
                statement.innerText = "You lost this round! Rock beats Scissors!";
                return;
            }
            else if (player2 == "paper") {
                playerScore += 1;
                statement.innerText = "You won this round! Scissors beats Paper!";
                return;
            }
            else {
                statement.innerText = "You tied this round! You both chose Scissors!"
                return;
            }
    }
}

function displayScore() {
    if (playerScore >= 5) {
        choices.removeChild(rock);
        choices.removeChild(paper);
        choices.removeChild(scissors);
        score.innerHTML = `<h2>You WON the game! Final score: ${playerScore} to ${computerScore}</h2>`;
    }
    else if (computerScore >= 5) {
        choices.removeChild(rock);
        choices.removeChild(paper);
        choices.removeChild(scissors);
        score.innerHTML = `<h2>You LOST the game! :( Final score: ${computerScore} to ${playerScore}</h2>`;
    }
    else {
        score.innerText += `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const statement = document.getElementById("statement");
const score = document.getElementById("score");
const choices = document.getElementById("choices");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
    playRPS("rock", getComputerChoice());
    displayScore();
});

paper.addEventListener("click", () => {
    playRPS("paper", getComputerChoice());
    displayScore();
});

scissors.addEventListener("click", () => {
    playRPS("scissors", getComputerChoice())
    displayScore();
});


/*
function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        const roundResult = playRPS(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.indexOf("You Win") > -1) {
            playerScore += 1;
        }
        else if (roundResult.indexOf("You Lose") > -1) {
            computerScore += 1;
        }
    }
    if (playerScore > computerScore) {
        console.log(`You won the most rounds! The score was ${playerScore} to ${computerScore}!`);
    }
    if (playerScore < computerScore) {
        console.log(`The computer won the most rounds! The score was ${computerScore} to ${playerScore}!`);
    }
    else {
        console.log(`You tied the computer after 5 rounds! The score was ${playerScore} to ${computerScore}`);
    }
}
*/

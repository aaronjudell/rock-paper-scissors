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

game();
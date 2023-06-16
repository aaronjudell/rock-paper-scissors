function getComputerChoice() {
    let result = 100 * Math.random();
    if (result <= 33) {
        return "Rock";
    }
    else if (result <= 66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
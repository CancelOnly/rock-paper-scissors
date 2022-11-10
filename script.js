const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWin(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWin(playerSelection, computerSelection);
    if (result == "Tie") {
        return "Draw!"
    } else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock, Paper & Scissors", "Test your might!");
        if (choice == null) {
            continue;
        } const choiceInLower = choice.toLocaleLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()
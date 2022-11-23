// toggle menu

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

toggle.onclick = function () {
    menu.classList.toggle('active')
}

// Game Logic

const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetGame() {
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").style.display = "none";
}


function startGame() {
    let rockBtn = document.querySelector('.rock')
    let paperBtn = document.querySelector('.paper')
    let scissorsBtn = document.querySelector('.scissors')

    rockBtn.addEventListener('click', () => {
        const computerSelection = computerSelect()
        const playerSelection = 'rock'
        playRound(playerSelection, computerSelection)
    })

    paperBtn.addEventListener('click', () => {
        const computerSelection = computerSelect()
        const playerSelection = 'paper'
        playRound(playerSelection, computerSelection)
    })

    scissorsBtn.addEventListener('click', () => {
        const computerSelection = computerSelect()
        const playerSelection = 'scissors'
        playRound(playerSelection, computerSelection)
    })
    console.log()
}

function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) {
        return;
    }

    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);

    winners.push(winner);

    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
    if (wins == 5) {
        displayEnd()
    }
}

function displayEnd() {
    let playerWin = winners.filter((item) => item == "Player").length;

    if (playerWin == 5) {
        document.querySelector('.winner').textContent = "Your victory means nothing"
    } else {
        document.querySelector('.winner').textContent = "Loser"
    }
    document.querySelector('.reset').style.display = 'inline-block';

}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector(".playerChoice").textContent = `You Chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector(".computerChoice").textContent = `PC Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
    if (winner == "Player") {
        document.querySelector(".winner").textContent = "Round Won";
    } else if (winner == "Computer") {
        document.querySelector(".winner").textContent = "PC is Superior";
    } else {
        document.querySelector(".winner").textContent = "Draw";
    }
}

function tallyWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerScore').textContent = `Player Score: ${playerWins}`;
    document.querySelector('.computerScore').textContent = `PC Score: ${computerWins}`;
    document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function computerSelect() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins, computerWins)
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } else if (
        (choiceP === "rock" && choiceC == "scissors") ||
        (choiceP === "paper" && choiceC == "rock") ||
        (choiceP === "scissors" && choiceC == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function setWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
}

startGame()

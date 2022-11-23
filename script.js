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


}

function startGame() {
    const rockBtn = document.querySelector('.rock')
    const paperBtn = document.querySelector('.paper')
    const scissorsBtn = document.querySelector('.scissors')

    rockBtn.addEventListener('click', () => {
        const computerSelection = computerPlay()
        const playerSelection = 'rock'
        playRound(playerSelection, computerSelection)
    })

    paperBtn.addEventListener('click', () => {
        const computerSelection = computerPlay()
        const playerSelection = 'paper'
        playRound(playerSelection, computerSelection)
    })

    scissorsBtn.addEventListener('click', () => {
        const computerSelection = computerPlay()
        const playerSelection = 'scissors'
        playRound(playerSelection, computerSelection)
    })
}

function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) {
        return
    }

    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);

    winner.push(winner);

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
        document.querySelector('.winner').textContent = "You Won"
    } else {
        document.querySelector('.winner').textContent = "Loser!"
    }
    document.querySelector('.reset').style.display = 'flex';

}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `You Chose: ${playerChoice.charAt(0).toUppercase() + playerChoice.slice(1)}`;
    document.querySelector('.computerChoice').textContent = `PC Chose: ${computerChoice.charAt(0).toUppercase() + computerChoice.slice(1)}`;
    // document.querySelector('.ties').textContent = `Ties: ${ties}`;

    document.querySelector('.winner').textContent = `Round Winner: ${winner}`;
}

function tallyWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerScore').textContent = `Score ${playerWins}`;
    document.querySelector('.computerScore').textContent = `Score ${computerWins}`;
    document.querySelector('.ties').textContent = `Score ${ties}`;
}

function computerSelect() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins, checkWins)
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
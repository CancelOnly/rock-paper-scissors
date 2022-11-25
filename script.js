// Button to display game options and get nickname
let username;
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
let inwin = document.querySelector('.win-start');


toggle.onclick = function () {
    menu.classList.toggle('active');
    username = document.getElementById('nickname').value;
    document.getElementById('myBtn').disabled = true;
    if (inwin.style.opacity !== "1") {
        inwin.style.opacity = "0";
        
    }
};

// Make the DIV element draggable Gamescore
dragElement(document.getElementById("scorewin"));
// dragElement(document.getElementById("startwin"));
dragElement(document.getElementById("helpwin"));
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//close btns
function closewin() {
    let showAlert;
    let r = confirm("Stop trying to close important features, do you understand?");
    if (r == true) {
    }
    else {
        window.open("https://youtu.be/dQw4w9WgXcQ");
    }
    document.getElementById("demo").innerText = showAlert;
}

// other btns

function alertwin() {
    alert("Just aesthetic");
}

// Game Logic


let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame() {
    winners = [];
    document.querySelector(".playerScore").textContent = `${username} Score: 0`;
    document.querySelector(".computerScore").textContent = "PC Score: 0";
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
    document.querySelector(".playerChoice").textContent = `${username} Chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
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
    document.querySelector('.playerScore').textContent = `${username} Score: ${playerWins}`;
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

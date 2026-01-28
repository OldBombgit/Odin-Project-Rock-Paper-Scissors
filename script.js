const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const result = document.querySelector(".displayResult");
const scores = document.querySelector(".displayScores");
const winner = document.querySelector(".winner");
const restart = document.querySelector(".restartBtn");

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "Something went wrong!";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === "rock") {

            if (computerChoice === "rock") {
                result.textContent = "Tie!";
            } else if (computerChoice === "paper") {
                computerScore++;
                result.textContent = "You lose! Paper beats Rock.";
            } else if (computerChoice === "scissors") {
                humanScore++;
                result.textContent = "You win! Rock beats Scissors.";
            } else {
                result.textContent = "Something went wrong!";
            }

        } else if (humanChoice === "paper") {

            if (computerChoice === "rock") {
                humanScore++;
                result.textContent = "You win! Paper beats Rock.";
            } else if (computerChoice === "paper") {
                result.textContent = "Tie!";
            } else if (computerChoice === "scissors") {
                computerScore++;
                result.textContent = "You lose! Scissors beats Paper.";
            } else {
                result.textContent = "Something went wrong!";
            }

        } else if (humanChoice === "scissors") {

            if (computerChoice === "rock") {
                computerScore++;
                result.textContent = "You lose! Rock beats Scissors.";
            } else if (computerChoice === "paper") {
                humanScore++;
                result.textContent = "You win! Scissors beats Paper.";
            } else if (computerChoice === "scissors") {
                result.textContent = "Tie!";
            } else {
                result.textContent = "Something went wrong!";
            }

        } else {
            console.log("Something went wrong!")
        }

        scores.innerText = `Computer Score: ${computerScore}\nHuman Score: ${humanScore}`;

        if (computerScore == 5 || humanScore == 5){
            rockBtn.style.display = "none";
            paperBtn.style.display = "none";
            scissorsBtn.style.display = "none";
        }

        if (computerScore == 5) {
            winner.innerText = "Computer Wins!";
            computerScore = 0;
            humanScore = 0;
        } else if (humanScore == 5) {
            winner.innerText = "Player wins!";
            computerScore = 0;
            humanScore = 0;
        } else {
            winner.innerText = "";
        }
    }

    rockBtn.addEventListener("click", function () {
        playRound("rock", getComputerChoice());
    });

    paperBtn.addEventListener("click", function () {
        playRound("paper", getComputerChoice());
    });

    scissorsBtn.addEventListener("click", function () {
        playRound("scissors", getComputerChoice());
    });

    restart.addEventListener("click", function(){
                rockBtn.style.display = "inline-flex";
                paperBtn.style.display = "inline-flex";
                scissorsBtn.style.display = "inline-flex";
                computerScore = 0;
                humanScore = 0;
                scores.innerText = `Computer Score: ${computerScore}\nHuman Score: ${humanScore}`;
                result.textContent = "Round Result";
                winner.innerText = "";
            });
}

playGame();




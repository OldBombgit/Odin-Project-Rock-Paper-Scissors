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

function getHumanChoice() {
    return prompt("Your choice!").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === "rock") {

            if (computerChoice === "rock") {
                console.log("Tie!")
            } else if (computerChoice === "paper") {
                computerScore++;
                console.log("You lose! Paper beats Rock.");
            } else if (computerChoice === "scissors") {
                humanScore++;
                console.log("You win! Rock beats Scissors.")
            } else {
                console.log("Something went wrong!")
            }

        } else if (humanChoice === "paper") {

            if (computerChoice === "rock") {
                humanScore++;
                console.log("You win! Paper beats Rock.")
            } else if (computerChoice === "paper") {
                console.log("Tie!");
            } else if (computerChoice === "scissors") {
                computerScore++;
                console.log("You lose! Scissors beats Paper.")
            } else {
                console.log("Something went wrong!")
            }

        } else if (humanChoice === "scissors") {

            if (computerChoice === "rock") {
                computerScore++;
                console.log("You lose! Rock beats Scissors.")
            } else if (computerChoice === "paper") {
                humanScore++
                console.log("You win! Scissors beats Paper.");
            } else if (computerChoice === "scissors") {
                console.log("Tie!")
            } else {
                console.log("Something went wrong!")
            }

        } else {
            console.log("Something went wrong!")
        }

    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log("Computer Score: " + computerScore);
    console.log("Human Score: " + humanScore);
}

playGame();




// Getting Computer Choice

function getComputerChoice() {

    const choiceNum = Math.floor(Math.random() * 3);

    if (choiceNum === 0) {
        return "rock";
    } else if (choiceNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

// const computerSelection = getComputerChoice();
// console.log(computerSelection);




// Getting Human Choice

function getHumanChoice() {
    const choiceInput = prompt("Kindly put in your entry here: ");

    return choiceInput;
}

// const humanSelection = getHumanChoice();
// console.log(humanSelection);




function playGame() {

// Declaring Player score variable
let humanScore = 0;
let computerScore = 0;

// Writing the logic to play single round
function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === "rock" && computer === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (human === "paper" && computer === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if (human === "scissors" && computer === "rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    } else if (human === "rock" && computer === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (human === "scissors" && computer === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else if (human === "paper" && computer === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else {
        console.log("It's a tie!");
    }
}

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won the game! Final Score: " + humanScore + " to " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("You lost the game. Final Score: " + humanScore + " to " + computerScore);
    } else {
        console.log("The game is a tie. Final Score: " + humanScore + " to " + computerScore)
    }
}


playGame();
























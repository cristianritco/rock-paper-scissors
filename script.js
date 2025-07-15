// console.log("hello");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); //randomly generates a number between 0, 1, 2

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Choose between rock/paper/scissors.");
  if (choice === "rock") {
    return "Rock";
  } else if (choice === "paper") {
    return "Paper";
  } else if (choice === "scissors") {
    return "Scissors";
  } else {
    return "Invalid option, choose between rock/paper/scissors.";
  }
}

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice, computerChoice);
  if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore++;
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    return "You win! Rock beats Scissors.";
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore++;
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    return "You win! Paper beats Rock.";
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore++;
    return "You Win! Scissors beats Paper.";
  } else if (humanChoice === computerChoice) {
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    return "It's a tie.";
  } else {
    computerScore++;
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
  }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(playRound(humanSelection, computerSelection));

function playGame() {
  let rounds = 0;

  while (rounds < 5) {
    let newHumanChoice = getHumanChoice();
    let newComputerChoice = getComputerChoice();
    playRound(newHumanChoice, newComputerChoice);
    rounds++;
  }
  if (humanScore > computerScore) {
    return "You Win!";
  } else if (humanScore < computerScore) {
    return "You Lose!";
  } else {
    return "It's a draw.";
  }
}

console.log(playGame());


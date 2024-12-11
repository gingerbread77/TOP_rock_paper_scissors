// function to randomly select between rock, paper or scissors
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// function to get user input
function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  let userInput = "";
  while (true) {
    userInput = prompt(
      "Please choose from 'rock','paper' and 'scissors: "
    ).trim();

    if (!userInput) {
      alert("Input cannot be empty, please enter 'rock','paper',or 'scissors'");
      continue;
    }

    if (!validChoices.includes(userInput.trim().toLowerCase())) {
      alert(
        `Invalid choice. Please choose one of the following: ${validChoices.join(", ")}.`);
      continue;
    }

    return userInput.trim();
  }
}

function playRound(humanChoice, computerChoice) {
  let result = null;
  humanChoice = humanChoice.toLowerCase();
  // human loses
  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    result = -1;
    // tie
  } else if (humanChoice === computerChoice) {
    result = 0;
    // human wins
  } else {
    result = 1;
  }
  return result;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // output results and update score
    alert(`Round ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    if (result === 1) {
      console.log(`You win! ${humanSelection} beats ${computerSelection}`);
      humanScore++;
    } else if (result === 0) {
      console.log(`${humanSelection} and ${computerSelection}, it's a tie`);
    } else {
      console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
      computerScore++;
    }
  }

  console.log(
    `Game Over. Player score: ${humanScore}, Computer score: ${computerScore}`
  );

  if (humanScore > computerScore) {
    alert("Congratulations, you win the game!");
  } else if (humanScore < computerScore) {
    alert("You lose the game!");
  } else {
    alert("Game Over. It's a tie!");
  }
}

playGame();

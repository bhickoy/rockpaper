// Variable container for buttons and button containers
const optionButtonContainer = document.getElementById("optionButtonContainer");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const roundButtonContainer = document.getElementById("roundButtonContainer");
const continueBtn = document.getElementById("continueBtn");
const restartBtn = document.getElementById("restartBtn");

// Variable containter for round number, status, score numbers, and images
const roundNum = document.getElementById("roundNum");
const status = document.getElementById("status");
const humanScore = document.getElementById("humanScore");
const computerScore = document.getElementById("computerScore");
const humanImg = document.getElementById("humanImg");
const computerImg = document.getElementById("computerImg");

// Global Variables
let HumanChoice;
let roundNumValue = 1;
let humanScoreValue = 0;
let computerScoreValue = 0;

// Function for getting Human Choice
function getHumanChoice() {

  if (HumanChoice === "rock") {
    return "rock";
  } else if (HumanChoice === "paper") {
    return "paper";
  } else if (HumanChoice === "scissors") {
    return "scissors";
  }

}

// Function for getting Computer Choice
function getComputerChoice() {
  let ComputerChoice = Math.ceil(Math.random() * 3);

  if (ComputerChoice === 1) {
    return "rock";
  } else if (ComputerChoice === 2) {
    return "paper";
  } else if (ComputerChoice === 3) {
    return "scissors";
  }
}

// Function for playing a Round
function playRound(humanChoice, computerChoice) {
    humanImg.src = `./images/${humanChoice}.png`;
    computerImg.src = `./images/${computerChoice}.png`;

  if (humanChoice === computerChoice) {
    status.style.backgroundColor = "#6b7785";
    status.textContent = "Tie!"; 
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    status.style.backgroundColor = "#198754";
    status.textContent = "You Win!";

    humanScoreValue++;
    humanScore.textContent = `${humanScoreValue}`;
  } else {
    status.style.backgroundColor = "#dc3545";
    status.textContent = "You Lose!";   

    computerScoreValue++;
    computerScore.textContent = `${computerScoreValue}`;
  }

  roundButtonContainer.style.display = "block";
  optionButtonContainer.style.display = "none";

}

// Function for proceeding to the next round
function roundContinue() {
  roundButtonContainer.style.display = "none";
  optionButtonContainer.style.display = "block";

  roundNumValue++;
  roundNum.textContent = `${roundNumValue}`;

  status.style.backgroundColor = "#6b7785";
  status.textContent = "Start!"; 

  humanImg.src = `./images/rock.png`;
  computerImg.src = `./images/rock.png`;
}

// Function for restarting the game
function roundRestart() {
  roundButtonContainer.style.display = "none";
  optionButtonContainer.style.display = "block";

  roundNumValue = 1;
  roundNum.textContent = `${roundNumValue}`;

  status.style.backgroundColor = "#6b7785";
  status.textContent = "Start!"; 

  humanScoreValue = 0;
  humanScore.textContent = `${humanScoreValue}`;

  computerScoreValue = 0;
  computerScore.textContent = `${computerScoreValue}`;

  humanImg.src = `./images/rock.png`;
  computerImg.src = `./images/rock.png`;
}


// Button Event Listeners
rockBtn.addEventListener("click", () => {
  HumanChoice = "rock";
  getHumanChoice();
  getComputerChoice();
  playRound(getHumanChoice(), getComputerChoice());
});
paperBtn.addEventListener("click", () => {
  HumanChoice = "paper";
  getHumanChoice();
  getComputerChoice();
  playRound(getHumanChoice(), getComputerChoice());
});
scissorBtn.addEventListener("click", () => {
  HumanChoice = "scissors";
  getHumanChoice();
  getComputerChoice();
  playRound(getHumanChoice(), getComputerChoice());
});
continueBtn.addEventListener("click", () => {
  roundContinue()
});
restartBtn.addEventListener("click", () => {
  roundRestart();
});


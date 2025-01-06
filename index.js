const playerScoreElement = document.querySelector("#player-score");
const playerMoveElement = document.querySelector("#player-move");
const computerScoreElement = document.querySelector("#computer-score");
const computerMoveElement = document.querySelector("#computer-move");
const gameInfo = document.querySelector("#game-info");
const gameCount = document.querySelector("#game-count");

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const resetBtn = document.querySelector("#reset-btn");

let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
let playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
let counter = parseInt(localStorage.getItem("gameCounter")) || 0;
let message = localStorage.getItem("messageLog") || "Mulai Permainan";

renderGameStats();

rockBtn.addEventListener("click", () => {
  playGames("Batu");
});

scissorsBtn.addEventListener("click", () => {
  playGames("Kertas");
});

paperBtn.addEventListener("click", () => {
  playGames("Gunting");
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

function playGames(playerMove) {
  let computerMove = pickComputerMove();
  console.log(`${playerMove} vs ${computerMove}`);

  battleGames(playerMove, computerMove);
  renderGameStats(playerMove, computerMove);
}

function battleGames(playerMove, computerMove) {
  if (playerMove === computerMove) {
    message = "Seri";
  } else if (playerMove === "Batu") {
    if (computerMove === "Gunting") {
      playerScore++;
      message = "Anda Menang";
    } else {
      computerScore++;
      message = "Anda Kalah";
    }
  } else if (playerMove === "Gunting") {
    if (computerMove === "Kertas") {
      playerScore++;
      message = "Anda Menang";
    } else {
      message = "Anda Kalah";
      computerScore++;
    }
  } else {
    if (computerMove === "Batu") {
      playerScore++;
      message = "Anda Menang";
    } else {
      computerScore++;
      message = "Anda Kalah";
    }
  }
  counter++;
}

function pickComputerMove() {
  const action = ["Batu", "Gunting", "Kertas"];
  let randomNumber = Math.floor(Math.random() * 3);

  return action[randomNumber];
}

function resetGame() {
  localStorage.clear();
  computerScore = 0;
  playerScore = 0;
  counter = 0;
  console.log("Permainan di-reset");

  gameInfo.innerHTML = "Mulai Permainan";
  playerMoveElement.innerHTML = "";
  computerMoveElement.innerHTML = "";
  playerScoreElement.innerHTML = playerScore;
  computerScoreElement.innerHTML = computerScore;
  gameCount.innerHTML = `Game ke: ${0}`;
}

function updateLocalStorage() {
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("computerScore", computerScore);
  localStorage.setItem("gameCounter", counter);
}

function renderGameStats(playerMove, computerMove) {
  updateLocalStorage();

  if (!playerMove && !computerMove) {
    playerMove = "";
    computerMove = "";
  }

  gameInfo.innerHTML = message;
  playerScoreElement.innerHTML = playerScore;
  computerScoreElement.innerHTML = computerScore;
  playerMoveElement.innerHTML = playerMove;
  computerMoveElement.innerHTML = computerMove;
  gameCount.innerHTML = `Game ke: ${counter}`;
}

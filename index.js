const userScoreElement = document.querySelector("#user-score");
const userMoveElement = document.querySelector("#user-move");
const computerScoreElement = document.querySelector("#computer-score");
const computerMoveElement = document.querySelector("#computer-move");
const gameInfo = document.querySelector("#game-info");
const gameCount = document.querySelector("#game-count");

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const resetBtn = document.querySelector("#reset-btn");

let computerScore = 0;
let userScore = 0;
let counter = 0;

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
  computerScore = 0;
  userScore = 0;
  counter = 0;

  gameInfo.innerHTML = "Mulai Permainan";
  userMoveElement.innerHTML = "";
  computerMoveElement.innerHTML = "";
  userScoreElement.innerHTML = userScore;
  computerScoreElement.innerHTML = computerScore;
  gameCount.innerHTML = `Game ke: ${0}`;
});

function playGames(userMove) {
  let computerMove = pickComputerMove();
  console.log(`${userMove} vs ${computerMove}`);

  battleGames(userMove, computerMove);
}

function battleGames(userMove, computerMove) {
  if (userMove === computerMove) {
    gameInfo.innerHTML = "Seri";
    userMoveElement.innerHTML = userMove;
    computerMoveElement.innerHTML = computerMove;
  } else if (userMove === "Batu") {
    if (computerMove === "Gunting") {
      userScore++;
      userScoreElement.innerHTML = userScore;
      gameInfo.innerHTML = "Anda Menang";
      userMoveElement.innerHTML = userMove;
      computerMoveElement.innerHTML = computerMove;
    } else {
      computerScore++;
      computerScoreElement.innerHTML = computerScore;
      gameInfo.innerHTML = "Anda Kalah";
      userMoveElement.innerHTML = userMove;
      computerMoveElement.innerHTML = computerMove;
    }
  } else if (userMove === "Gunting") {
    if (computerMove === "Kertas") {
      userScore++;
      userScoreElement.innerHTML = userScore;
      gameInfo.innerHTML = "Anda Menang";
      userMoveElement.innerHTML = userMove;
      computerMoveElement.innerHTML = computerMove;
    } else {
      computerScore++;
      computerScoreElement.innerHTML = computerScore;
      gameInfo.innerHTML = "Anda Kalah";
      userMoveElement.innerHTML = userMove;
      computerMoveElement.innerHTML = computerMove;
    }
  } else {
    if (computerMove === "Batu") {
      userScore++;
      userScoreElement.innerHTML = userScore;
      gameInfo.innerHTML = "Anda Menang";
      userMoveElement.innerHTML = userMove;
      computerMoveElement.innerHTML = computerMove;
    } else {
      computerScore++;
      computerScoreElement.innerHTML = computerScore;
      gameInfo.innerHTML = "Anda Kalah";
      userMoveElement.innerHTML = userMove;
      computerMoveElement.innerHTML = computerMove;
    }
  }

  counter++;
  gameCount.innerHTML = `Game ke: ${counter}`;
}

function pickComputerMove() {
  const action = ["Batu", "Gunting", "Kertas"];
  let randomNumber = Math.floor(Math.random() * 3);

  return action[randomNumber];
}

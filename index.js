const userScoreElement = document.querySelector(".user-score");
const userMoveElement = document.querySelector("#user-move");
const computerScoreElement = document.querySelector(".computer-score");
const computerMoveElement = document.querySelector("#computer-move");
const gameInfo = document.querySelector("#game-info");

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const resetBtn = document.querySelector("#reset-btn");

let computerScore = 0;
let userScore = 0;
let counter = 0;
// paperBtn.addEventListener("click", playGames("Gunting"));
// scissorsBtn.addEventListener("click", () => {
//   playGames("Kertas");
// });

rockBtn.addEventListener("click", () => {
  playGames("Batu");
});

function playGames(userMove) {
  let computerMove = pickComputerMove();

  console.log(`${userMove} vs ${computerMove}`);

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
  }
}

function pickComputerMove() {
  const action = ["Batu", "Gunting", "Kertas"];
  let randomNumber = Math.floor(Math.random() * 3);

  return action[randomNumber];
}

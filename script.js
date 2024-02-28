const userChoices = document.querySelectorAll("#userChoices div");
const compChoices = document.querySelectorAll("#compChoices div");
const userScoreElement = document.getElementById("userScore");
const compScoreElement = document.getElementById("compScore");

const message = document.getElementById("msg");

let userScore = 0;
let compScore = 0;

userChoices.forEach((image) => {
  image.addEventListener("click", () => {
    const userChoice = image.getAttribute("id");
    game(userChoice);
  });
});

const genCompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);

  let compChoice = compChoices[randomNum];
  compChoice.classList.remove("dishoom");
  void compChoice.offsetWidth;
  compChoice.classList.add("dishoom");

  return option[randomNum];
};

const gameDraw = () => {
  message.innerText = "Game draw!";
  message.style.backgroundColor = "rgb(5, 5, 26)";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreElement.innerText = userScore;
    message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreElement.innerText = compScore;
    message.innerText = `Computer win! ${compChoice} beats your ${userChoice}`;
    message.style.backgroundColor = "red";
  }
};

const game = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin;
    if (userChoice === "rock") {
      userWin = compChoice === "scissor";
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock";
    } else {
      userWin = compChoice === "paper";
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

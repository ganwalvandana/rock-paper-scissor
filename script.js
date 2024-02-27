const choices = document.querySelectorAll(".image");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");

const message = document.getElementById("msg");

let userInitialScore = 0;
let compInitialScore = 0;

choices.forEach(image => {
    image.addEventListener("click", () => {
        const userChoice = image.getAttribute("id")
        game(userChoice);
    })
});

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randomNum = Math.floor(Math.random() * 3);
    return option[randomNum];
}
 
const gameDraw = () => {
    message.innerText = "Game draw!"
    message.style.backgroundColor = "rgb(5, 5, 26)"

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userInitialScore++;
        userScore.innerText = userInitialScore;
        message.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        message.style.backgroundColor = "green"
    } else {
        compInitialScore++;
        compScore.innerText = compInitialScore;
        message.innerText = `Computer win! ${compChoice} beats your ${userChoice}`
        message.style.backgroundColor = "red"

    }
}

const game = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "scissor" ? true : false;
        } else if (userChoice === "paper") {
            userWin =  compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }


}



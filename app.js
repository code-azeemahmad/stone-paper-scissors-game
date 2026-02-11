let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice img');

const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const getCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
};

const drawGame = () => {
    console.log("It was a draw!");
    msg.innerText = "It was a draw!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("USER CHOICE:", userChoice);
    const compChoice = getCompChoice();
    console.log("COMPUTER CHOICE:", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else if (userChoice === "scissors") {
            // paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});
let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const  newGame = document.querySelector(".new_game");

newGame.addEventListener("click",()=>{
    location.reload();
});

const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawnGame = () => {
    msg.innerText = "Match drawn, Playagain"; 
    msg.style.backgroundColor = "#b5b9bc"
};

const showWinner = (userWin ,userChoice ,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! , ${userChoice} beats ${compChoice}`; 
        msg.style.backgroundColor = "#2ecc71"
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! , ${compChoice} beats ${userChoice}`; 
        msg.style.backgroundColor = "#b22222" 
    }
}

let yourrockChoice = document.querySelector(".your-rock-choice");
let yourpaperChoice = document.querySelector(".your-paper-choice");
let yourscissorChoice = document.querySelector(".your-scissor-choice");
let comprockChoice = document.querySelector(".comp-rock-choice");
let comppaperChoice = document.querySelector(".comp-paper-choice");
let compscissorChoice = document.querySelector(".comp-scissor-choice");


            
const playGame = (userChoice) => {
    const compChoice = genComChoice();

    if(userChoice === "rock"){
        
        yourrockChoice.style.display = "block";
        yourpaperChoice.style.display = "none";
        yourscissorChoice.style.display = "none";
    }
    else if(userChoice === "paper"){
        
        yourpaperChoice.style.display = "block";
        yourrockChoice.style.display = "none";
        yourscissorChoice.style.display = "none";
    }
    else{
        
        yourscissorChoice.style.display = "block";
        yourrockChoice.style.display = "none";
        yourpaperChoice.style.display = "none";
    }


    if(compChoice === "rock"){
        
        comprockChoice.style.display = "block";
        comppaperChoice.style.display = "none";
        compscissorChoice.style.display = "none";
    }
    else if(compChoice === "paper"){
        
        comppaperChoice.style.display = "block";
        comprockChoice.style.display = "none";
        compscissorChoice.style.display = "none";
    }
    else{
        
        compscissorChoice.style.display = "block";
        comprockChoice.style.display = "none";
        comppaperChoice.style.display = "none";
    }



    if (userChoice == compChoice) {
        drawnGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});




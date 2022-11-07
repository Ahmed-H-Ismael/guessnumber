'use strict';
let questionMark = document.querySelector(".number");
let buttonCheck  = document.querySelector(".check");
let message      = document.querySelector(".message");
let againbutton  = document.querySelector(".again");
let score        = document.querySelector(".score");
let high         = document.querySelector(".highscore");
let scoreNumber = 20;
let highNumber  = 0;

function startGame(){
    scoreNumber = 20
    let randomNumber = Math.ceil(Math.random() * 20);
    document.body.style.backgroundColor = "#222"
    displayMessage("Start guessing...")
    questionMark.textContent = "?";
    score.textContent = scoreNumber;
    document.querySelector(".guess").value = ""
    console.log(randomNumber)
}
startGame()

function displayMessage(message){
    document.querySelector(".message").textContent = message
}
function lostGame(){
    if(score.textContent <= 0){
        score.textContent = 0
        displayMessage("💥 You lost the game!")
    }
}
buttonCheck.addEventListener("click",function(){
    let guessNumber  = Number(document.querySelector(".guess").value);
    if(!guessNumber){
        displayMessage(" ⛔️ No Number")
    }else if(guessNumber == randomNumber){
        displayMessage("🎉 Correct Number!")
        document.body.style.backgroundColor = "#60b347"
        questionMark.textContent = randomNumber;
        if(scoreNumber > highNumber){
            highNumber = scoreNumber
            high.textContent = highNumber
        }   
    }
    else if(guessNumber !== randomNumber){
        displayMessage(guessNumber > randomNumber ?"📈 Too high!" : "📉 Too low!" )
        scoreNumber-- ;
        score.textContent = scoreNumber;
        lostGame();
    }
})
againbutton.addEventListener("click",function(){
    startGame()
})

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let playerWinCount = 0;
let computerWinCount = 0;

function revealResults(winner){
    let webpage = document.querySelector('.webpage');
    let underneath = document.querySelector('.underneath');
    let restartButton = document.querySelector('.restart');
    let robot = document.querySelector('.robot');
    let trophy = document.querySelector('.trophy');
    webpage.style.opacity = 0;
    webpage.style.transform = 'scale(0)';
    webpage.style.display = 'none';
    underneath.style.display = 'flex';
    restartButton.style.display = 'block';
    if(winner == 'player'){
        document.getElementById('finalText').innerHTML = 'You Win!';
        trophy.style.display = 'block';
    }
    else if(winner == 'computer'){
        document.getElementById('finalText').innerHTML = 'You Lost To The Computer :/';
        robot.style.display = 'block';
    }
    else{
        document.getElementById('finalText').innerHTML = 'ERROR 1034';
    }
}

function computerPlay(){
    let computerMove = Math.floor(Math.random() * 3);
    let computerMoveString;

    switch(computerMove){
        case 0:
            computerMoveString = 'rock';
            break;
        case 1: 
            computerMoveString = 'paper';
            break;
        default:
            computerMoveString = 'scissors';
    }
    
    return computerMoveString;
}

function playRound(playerSelection, computerSelection){
    
    if(playerSelection != null){

        playerSelection = playerSelection.toLowerCase();

        if(playerSelection == 'rock' && computerSelection == 'paper'){
            return("Round Result: You Lose This Round! Paper beats Rock");
        }
        else if(playerSelection == 'rock' && computerSelection == 'scissors'){
            return("Round Result: You Win This Round! Rock beats Scissors");
        }
        else if(playerSelection == 'paper' && computerSelection == 'rock'){
            return("Round Result: You Win This Round! Paper beats Rock");
        }
        else if(playerSelection == 'paper' && computerSelection == 'scissors'){
            return("Round Result: You Lose This Round! Scissors beats Paper");
        }
        else if(playerSelection == 'scissors' && computerSelection == 'rock'){
            return("Round Result: You Lose This Round! Rock beats Scissors");
        }
        else if(playerSelection == 'scissors' && computerSelection == 'paper'){
            return("Round Result: You Win This Round! Scissors beats Paper");
        }
        else{
            return("Round Result: Tie");
        }

    }
}

// function game(){
//     let playerWinCount = 0;
//     let computerWinCount = 0;

//     for(let i = 0; i < 5; i++){

//         let playerSelection = prompt("Choose Rock, Paper, or Scissors.");
//         let computerSelection = computerPlay();

//         let roundWinner = playRound(playerSelection, computerSelection);
//         if(roundWinner.includes("Win")){
//             playerWinCount++;
//         }
//         else{
//             computerWinCount++;
//         }

//         console.log(roundWinner);
//     }

//     if(playerWinCount > computerWinCount){
//         return("Match Result: You Win!");
//     }
//     else if(computerWinCount > playerWinCount){
//         return("Match Result: You Lose, Computer Wins.");
//     }
//     else{
//         return("Match Result: Tie.")
//     }

// }

// console.log(game());
//console.log(playRound('rock', 'paper'));

rock.addEventListener('click', function () {

    if(playerWinCount < 5 && computerWinCount < 5){

        let rockRound = playRound('rock', computerPlay());

        if(rockRound.includes('Win')){
            playerWinCount++;
        }
        else if(rockRound.includes('Tie')){

        }
        else{
            computerWinCount++;
            
        }

        document.getElementById('results').innerHTML = rockRound;
        document.getElementById('score').innerHTML = `User Score: ${playerWinCount}\nComputer Score: ${computerWinCount}`;

        if(playerWinCount == 5){
            document.getElementById('declareWinner').innerHTML = 'User Wins!';
            //revealResults('player');
            setTimeout(revealResults, 500,"player");
        }
        else if(computerWinCount == 5){
            document.getElementById('declareWinner').innerHTML = 'Computer Wins!';
            //revealResults('computer');
            setTimeout(revealResults, 500, "computer");
        }

    }

});

paper.addEventListener('click', function () {

    if(playerWinCount < 5 && computerWinCount < 5){

        let paperRound = playRound('paper', computerPlay());

        if(paperRound.includes('Win')){
            playerWinCount++;
        }
        else if(paperRound.includes('Tie')){

        }
        else{

            computerWinCount++;
        
        }

        document.getElementById('results').innerHTML = paperRound;
        document.getElementById('score').innerHTML = `User Score: ${playerWinCount}\nComputer Score: ${computerWinCount}`;

        if(playerWinCount == 5){
            document.getElementById('declareWinner').innerHTML = 'User Wins!';
            //revealResults('player');
            setTimeout(revealResults, 500, "player");
        }
        else if(computerWinCount == 5){
            document.getElementById('declareWinner').innerHTML = 'Computer Wins!';
            //revealResults('computer');
            setTimeout(revealResults, 500,"computer");
        }

    }

});

scissors.addEventListener('click', function () {

    if(playerWinCount < 5 && computerWinCount < 5){

        let scissorsRound = playRound('scissors', computerPlay());

        if(scissorsRound.includes('Win')){
            playerWinCount++;
        }
        else if(scissorsRound.includes('Tie')){

        }
        else{
            computerWinCount++;
        }

        document.getElementById('results').innerHTML = scissorsRound;
        document.getElementById('score').innerHTML = `User Score: ${playerWinCount}\nComputer Score: ${computerWinCount}`;

        if(playerWinCount == 5){
            document.getElementById('declareWinner').innerHTML = 'User Wins!';
            //revealResults('player');
            setTimeout(revealResults, 500,"player");
        }
        else if(computerWinCount == 5){
            document.getElementById('declareWinner').innerHTML = 'Computer Wins!';
            //revealResults('computer');
            setTimeout(revealResults, 500, "computer");
        }

    }

});
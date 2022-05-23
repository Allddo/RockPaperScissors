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
            return("Round Result: You Lose! Paper beats Rock");
        }
        else if(playerSelection == 'rock' && computerSelection == 'scissors'){
            return("Round Result: You Win! Rock beats Scissors");
        }
        else if(playerSelection == 'paper' && computerSelection == 'rock'){
            return("Round Result: You Win! Paper beats Rock");
        }
        else if(playerSelection == 'paper' && computerSelection == 'scissors'){
            return("Round Result: You Lose! Scissors beats Paper");
        }
        else if(playerSelection == 'scissors' && computerSelection == 'rock'){
            return("Round Result: You Lose! Rock beats Scissors");
        }
        else if(playerSelection == 'scissors' && computerSelection == 'paper'){
            return("Round Result: You Win! Scissors beats Paper");
        }
        else{
            return("Round Result: Tie");
        }

    }
}

function game(){
    let playerWinCount = 0;
    let computerWinCount = 0;

    for(let i = 0; i < 5; i++){

        let playerSelection = prompt("Choose Rock, Paper, or Scissors.");
        let computerSelection = computerPlay();

        let roundWinner = playRound(playerSelection, computerSelection);
        if(roundWinner.includes("Win")){
            playerWinCount++;
        }
        else{
            computerWinCount++;
        }

        console.log(roundWinner);
    }

    if(playerWinCount > computerWinCount){
        return("Match Result: You Win!");
    }
    else if(computerWinCount > playerWinCount){
        return("Match Result: You Lose, Computer Wins.");
    }
    else{
        return("Match Result: Tie.")
    }

}

console.log(game());
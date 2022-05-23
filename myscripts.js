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
            return("You Lose! Paper beats Rock");
        }
        else if(playerSelection == 'rock' && computerSelection == 'scissors'){
            return("You Win! Rock beats Scissors");
        }
        else if(playerSelection == 'paper' && computerSelection == 'rock'){
            return("You Win! Paper beats Rock");
        }
        else if(playerSelection == 'paper' && computerSelection == 'scissors'){
            return("You Lose! Scissors beats Paper");
        }
        else if(playerSelection == 'scissors' && computerSelection == 'rock'){
            return("You Lose! Rock beats Scissors");
        }
        else if(playerSelection == 'scissors' && computerSelection == 'paper'){
            return("You Win! Scissors beats Paper");
        }
        else{
            return("Tie");
        }

    }
}

let playerSelection = prompt("Choose Rock, Paper, or Scissors.");
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
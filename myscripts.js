function computerPlay(){
    let computerMove = Math.floor(Math.random() * 3);
    let computerMoveString;

    switch(computerMove){
        case 0:
            computerMoveString = 'Rock';
            break;
        case 1: 
            computerMoveString = 'Paper';
            break;
        default:
            computerMoveString = 'Scissors';
    }

    return computerMoveString;
}

console.log(computerPlay());
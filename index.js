const options = ['rock', 'paper', 'scissors'];

function getComputerChoice (){
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
    return choice;
    
}

function checkWinner(playerSelection,computerSelectios){
    if (playerSelection == computerSelectios){
        return 'Tie';
    }
    else if(
        (playerSelection == 'rock' && computerSelectios == 'scissors') || 
        (playerSelection == 'scissors' && computerSelectios == 'paper') ||
        (playerSelection == 'paper' && computerSelectios == 'rock')
    ){
        return 'Player';
    }
    else {
        return 'Computer';
    }
}

    function playRound(playerSelection,computerSelectios){
        const result = checkWinner(playerSelection,computerSelectios);
        if(result == 'Tie'){
            return 'Its a Tie' 
        }
        else if (result == 'Player'){
            return `Player won ${playerSelection} beats ${computerSelectios}`
        }
        else {
            return `You lose ${computerSelectios} beats ${playerSelection}`;
        }
}
const playerSelection = 'rock';
const computerSelectios = getComputerChoice();
console.log(playRound(playerSelection,computerSelectios));
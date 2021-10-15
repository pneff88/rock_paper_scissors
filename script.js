function computerPlay() {
    let throws = ["rock", "paper", "scissors"]
    return throws[Math.floor(Math.random() * 3)]
}

let winner = undefined;
let playerWins = 0;
let computerWins = 0;

function game() {

    let game_over = false;
    if (winner == "you") {
        playerWins += 1;
        yourScore.innerHTML = `YOUR Score: ${playerWins}`;
    } else if (winner == "computer") {
        computerWins += 1;
        compScore.innerHTML = `COMPUTER Score: ${computerWins}`;
    }

    if (playerWins > 4) {
        game_over = true;
        display2.textContent = 'THE GAME IS OVER. YOU ARE THE VICTOR.';
    } else if (computerWins > 4) {
        game_over = true; 
        display2.textContent = 'THE GAME IS OVER. THE COMPUTER WINS.';
    }
}




function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        winner = undefined;
        display.textContent = "Kiss you're sister; you tied.";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        winner = "you";
        display.textContent = "Huzzah! You've won. Rock crushes Scissors.";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        winner = "computer";
        display.textContent = "Dangit! You lost because Paper covers Rock.";
    
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        winner = undefined;
        display.textContent = "Kiss you're sister; you tied.";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        winner = "you";
        display.textContent = "Huzzah! You've won. Paper covers Rock.";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        winner = "computer";
        display.textContent = "Dangit! You lost because Scissors slice Paper.";
        
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        winner = undefined;
        display.textContent = "Kiss you're sister; you tied.";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        winner = "you";
        display.textContent = "Huzzah! You've won. Scissors slices Paper.";  
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        winner = "computer";
        display.textContent = "Dangit! You lost because Rock crushes Scissors.";
        
    }

}

let playerChoice = undefined;

const rockB = document.querySelector('#rockB');
rockB.addEventListener('click', () => {
    playerChoice = "rock";
    console.log(playRound(playerChoice, computerPlay()));
    game();
})

const paperB = document.querySelector('#paperB');
paperB.addEventListener('click', () => {
    playerChoice = "paper";
    console.log(playRound(playerChoice, computerPlay()));
    game();
})

const scissorsB = document.querySelector('#scissorsB');
scissorsB.addEventListener('click', () => {
    playerChoice = "scissors";
    console.log(playRound(playerChoice, computerPlay()));
    game();
})

const displayConsole = document.querySelector('.displayConsole');

const display = document.createElement('div');
display.classList.add('display');
display.textContent = null;

const yourScore = document.querySelector('#yourScore');

const compScore = document.querySelector('#compScore');

displayConsole.appendChild(display);

const display2 = document.createElement('div');
display2.classList.add('display2');
display.textContent = null;

displayConsole.appendChild(display2);


game();

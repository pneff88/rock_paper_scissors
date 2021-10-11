function computerPlay() {
    let throws = ["rock", "paper", "scissors"]
    return throws[Math.floor(Math.random() * 3)]
}

let winner = undefined;

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return "Kiss you're sister; you tied.";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        winner = "you";
        return "Huzzah! You've won. Rock crushes Scissors.";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        winner = "computer";
        return "Dangit! You lost because Paper covers Rock.";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return "Kiss you're sister; you tied.";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        winner = "you";
        return "Huzzah! You've won. paper covers Rock.";
        
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        winner = "computer";
        return "Dangit! You lost because Scissors slice Paper.";
        
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        return "Kiss you're sister; you tied.";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        winner = "you";
        return "Huzzah! You've won. Scissors slices Paper.";
        
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        winner = "computer";
        return "Dangit! You lost because Rock crushes Scissors.";
        
    }
}

function game() {
    let youWins = 0;
    let computerWins = 0;

    console.log("There will be five rounds. I wish you luck, madam or sir!")

    for (let i=0; i<5; i++) {
    let playerChoice = prompt("Rock, paper, or scissors, kid?");
    console.log(playRound(playerChoice, computerPlay()));
        if (winner == "you") {
            youWins += 1;
        } else if (winner == "computer") {
            computerWins += 1;
        }
    console.log(`Score is YOU: ${youWins}; COMPUTER: ${computerWins}`)
    }
    if (youWins == computerWins) {
        console.log("This sucks but the whole game was a tie. Sorry, breh.")
    } else if (youWins >computerWins) { 
        console.log("Sound the trumpet, you have won, blessed one! YOU WIN!")
    } else {
        console.log("Alas, the Preen shall reign for a thousand years. YOU LOSE!")
    }
}
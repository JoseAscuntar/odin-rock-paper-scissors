const GAMES_PER_ROUND = 5;

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            return "Rock";
            break;
        
        case 1:
            return "Paper";
            break;

        case 2:
            return "Scissors";
            break;
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?");
}

let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice, computerChoice) {
    let humanChoiceCap = humanChoice.at(0).toUpperCase();
    for (let i = 1; i < humanChoice.length; i++) {
        humanChoiceCap += humanChoice.at(i).toLowerCase();
    }

    let humanWon = false;
    if ((humanChoiceCap == "Rock" && computerChoice == "Scissors") 
     || (humanChoiceCap == "Scissors" && computerChoice == "Paper")
     || (humanChoiceCap == "Paper" && computerChoice == "Rock")) {
        humanWon = true;
     } 

    if (humanChoiceCap == computerChoice) {
        return "You tied! You both got " + humanChoiceCap + ".";
    } else if (humanWon) {
        humanScore++;
        return "You won! " + humanChoiceCap + " beats " + computerChoice + ".";
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoiceCap + ".";
    }
}

function playRound() {
    for (let i = 0; i < GAMES_PER_ROUND; i++) {
        console.log(playGame(getHumanChoice(), getComputerChoice()));
    }
    if (humanScore > computerScore) {
        let tempHuman = humanScore;
        let tempComputer = computerScore;
        humanScore = 0;
        computerScore = 0;
        return "YOU WON THE ROUND! you won " + tempHuman + " game" + (tempHuman == 1 ? "" : "s") + ", while the computer won " + tempComputer + ".";   
    } else if (humanScore < computerScore) {
        let tempHuman = humanScore;
        let tempComputer = computerScore;
        humanScore = 0;
        computerScore = 0;
        return "You LOST the round! you won " + tempHuman + " game" + (tempHuman == 1 ? "" : "s") + ", while the computer won " + tempComputer+ "."; 
    } else {
        let tempScore = humanScore;
        humanScore = 0;
        computerScore = 0;
        return "You TIED the round! you each won " + tempScore + " game" + (tempScore == 1 ? "" : "s") + ".";
    }
}

console.log(playRound());



const ROUNDS_PER_GAME = 5;

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

function playRound(humanChoice, computerChoice) {
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

function playGame() {
    for (let i = 0; i < ROUNDS_PER_GAME; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    if (humanScore > computerScore) {
        let tempHuman = humanScore;
        let tempComputer = computerScore;
        humanScore = 0;
        computerScore = 0;
        return "YOU WON THE GAME! you won " + tempHuman + " round" + (tempHuman == 1 ? "" : "s") + ", while the computer won " + tempComputer + ".";   
    } else if (humanScore < computerScore) {
        let tempHuman = humanScore;
        let tempComputer = computerScore;
        humanScore = 0;
        computerScore = 0;
        return "You LOST the game! you won " + tempHuman + " round" + (tempHuman == 1 ? "" : "s") + ", while the computer won " + tempComputer+ "."; 
    } else {
        let tempScore = humanScore;
        humanScore = 0;
        computerScore = 0;
        return "You TIED the game! you each won " + tempScore + " round" + (tempScore == 1 ? "" : "s") + ".";
    }
}

console.log(playGame());



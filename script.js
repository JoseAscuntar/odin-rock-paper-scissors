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

console.log(playGame(getHumanChoice(), getComputerChoice()));



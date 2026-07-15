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
    let humanWon = false;
    if ((humanChoice == "Rock" && computerChoice == "Scissors") 
     || (humanChoice == "Scissors" && computerChoice == "Paper")
     || (humanChoice == "Paper" && computerChoice == "Rock")) {
        humanWon = true;
     } 

    if (humanChoice == computerChoice) {
        return "You tied! You both got " + humanChoice + ".";
    } else if (humanWon) {
        humanScore++;
        return "You won! " + humanChoice + " beats " + computerChoice + ".";
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }
}

console.log(playGame(getHumanChoice(), getComputerChoice()));



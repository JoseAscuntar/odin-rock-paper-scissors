const ROUNDS_PER_GAME = 5;

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            return "rock";
            break;
        
        case 1:
            return "paper";
            break;

        case 2:
            return "scissors";
            break;
    }
}

let humanChoice = "";
let computerChoice = "";
const results = document.querySelector("#results")
const buttons = document.querySelectorAll(".image")

buttons.forEach(button => {
    button.addEventListener("click", () => playRound(button.id, getComputerChoice()))
})

function playRound(humanChoice, computerChoice) {
    let humanWon = false;
    if ((humanChoice == "rock" && computerChoice == "scissors") 
     || (humanChoice == "scissors" && computerChoice == "paper")
     || (humanChoice == "paper" && computerChoice == "rock")) {
        humanWon = true;
    } 

    const result = document.createElement("li")
    if (humanChoice == computerChoice) {
        result.textContent = "You tied! You both got " + humanChoice + ".";
    } else if (humanWon) {
        result.textContent = "You won! " + humanChoice + " beats " + computerChoice + ".";
    } else {
        result.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }
    results.appendChild(result)
}


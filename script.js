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
let humanScore = 0;
let computerScore = 0;

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
    result.style.listStyle = "none";
    if (humanChoice == computerChoice) {
        result.textContent = "You tied! You both got " + humanChoice + ".";
        result.style.backgroundColor = "#FFF9C4";
    } else if (humanWon) {
        result.textContent = "You won! " + humanChoice + " beats " + computerChoice + ".";
        result.style.backgroundColor = "#CAEACE";
        humanScore++;
    } else {
        result.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
        result.style.backgroundColor = "#FAB8BA";
        computerScore++;
    }
    results.appendChild(result)

    // This is the new equivalent of playGame()
    const all = document.querySelectorAll("body *");
    const background = document.querySelector("*");
    if (humanScore >= 5 || computerScore >= 5) {
        all.forEach(element => {
            element.classList.toggle("hidden");
        });
        const bigResult = document.createElement("div");
        bigResult.classList.add("bigResult");

        const playAgain = document.createElement("button")
        playAgain.textContent = "Play Again";
        playAgain.addEventListener("click", () => location.reload())
        

        if(humanScore >= 5) {
            bigResult.textContent = "You Won!";
            background.style.backgroundColor = "#CAEACE"
        }
        else {
            bigResult.textContent = "You Lost!";
            background.style.backgroundColor = "#FAB8BA"
        }

        const body = document.querySelector("body");
        body.appendChild(bigResult);
        bigResult.appendChild(playAgain);
    }
}


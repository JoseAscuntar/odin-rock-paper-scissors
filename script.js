const ROUNDS_PER_GAME = 5;

function toEmoji(choice) {
    switch (choice) {
        case "rock":
            return "&#x1faa8;";
            break;
        case "paper":
            return "&#128196;";
            break;
        case "scissors":
            return "&#x2702;&#xFE0F;";
            break;
    }
}

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

const humanChoiceEmoji = document.querySelector("#humanChoice");
const computerChoiceEmoji = document.querySelector("#computerChoice");
const results = document.querySelector("#results");
const buttons = document.querySelectorAll(".image");
let humanScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => playRound(button.id, getComputerChoice()))
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)"; // I'm not supposed to know this yet, but I've been investigating.
        humanChoiceEmoji.innerHTML = toEmoji(button.id);
    })
    button.addEventListener("mouseout", () => {
        humanChoiceEmoji.innerHTML = "";
        button.style.transform = "scale(1)";
    })
})

function playRound(humanChoice, computerChoice) {
    humanChoiceEmoji.innerHTML = toEmoji(humanChoice);
    computerChoiceEmoji.innerHTML = toEmoji(computerChoice);
    
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

    humanScoreEmoji = document.querySelector("#humanScore");
    computerScoreEmoji = document.querySelector("#computerScore");

    humanScoreEmoji.innerHTML = "&#x1F9D1; " + humanScore;
    computerScoreEmoji.innerHTML = computerScore + " &#129302;"; 

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
        playAgain.addEventListener("click", () => location.reload());
        

        if(humanScore >= 5) {
            bigResult.textContent = "You Won!";
            background.style.backgroundColor = "#CAEACE";
        }
        else {
            bigResult.textContent = "You Lost!";
            background.style.backgroundColor = "#FAB8BA";
        }

        const body = document.querySelector("body");
        body.appendChild(bigResult);
        bigResult.appendChild(playAgain);
    }
}


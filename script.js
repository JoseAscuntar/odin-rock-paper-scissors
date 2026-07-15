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

console.log(getHumanChoice());
console.log(getComputerChoice());

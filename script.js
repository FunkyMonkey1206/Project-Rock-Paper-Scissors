//Rock Paper Scissors game

//getting randomselection from the computer

function getComputerChoice(){
    let computerChoice = Math.floor((Math.random() *3) +1);
    console.log(computerChoice);
    if (computerChoice == 1){
        return "Rock";
    }
    else if (computerChoice == 2){
        return "Paper";
    }
    else {
        return "Scissors"
    }
}

//getting player input for choice
function getPlayerChoice(){
    let playerChoice = prompt("Please enter Rock, Paper or Scissors");
    console.log(playerChoice);
    return playerChoice;
}

//let playerSelection = getPlayerChoice();
//let computerSelection = getComputerChoice();


//playing round 
function playRound(playerSelection, computerSelection){
    console.log("Computer is " + computerSelection);
    console.log("Player is " + playerSelection);

    if(playerSelection == computerSelection){
        return "It's a draw!";
    }
    else {
        if(playerSelection == "Rock" && computerSelection == "Scissors"){
            let result = "You win! " + playerSelection + " beats " + computerSelection;
            console.log(result);
            return result;
        }
        else if(playerSelection == "Paper" && computerSelection == "Rock"){
            let result = "You win! " + playerSelection + " beats " + computerSelection;
            console.log(result);
            return result;
        }
        else if(playerSelection == "Scissors" && computerSelection == "Paper"){
            let result = "You win! " + playerSelection + " beats " + computerSelection;
            console.log(result);
            return result;
        }
        else if(playerSelection == "Scissors" && computerSelection == "Rock"){
            let result = "You lose! " + computerSelection + " beats " + playerSelection;
            console.log(result);
            return result;
        }
        else if(playerSelection == "Rock" && computerSelection == "Paper"){
            let result = "You lose! " + computerSelection + " beats " + playerSelection;
            console.log(result);
            return result;
        }
        else if(playerSelection == "Paper" && computerSelection == "Scissors"){
            let result = "You lose! " + computerSelection + " beats " + playerSelection;
            console.log(result);
            return result;
        }
    }
}

function game(){
alert(playRound(getPlayerChoice(), getComputerChoice()));
alert(playRound(getPlayerChoice(), getComputerChoice()));
alert(playRound(getPlayerChoice(), getComputerChoice()));
alert(playRound(getPlayerChoice(), getComputerChoice()));
alert(playRound(getPlayerChoice(), getComputerChoice()));
}

game();


//Rock Paper Scissors game

const gameStats = document.querySelector('#gameStats');
const roundDiv = document.querySelector('.round');
const playerDiv = document.querySelector('.player');
const computerDiv = document.querySelector('.computer');
const gameDiv = document.querySelector('.game');
const buttons = document.querySelectorAll('button');

let gameNumber = 0;
let playerScore = 0;
let computerScore = 0; 
let result = "";




buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
});


//getting randomselection from the computer

function getComputerChoice(){
    let computerChoice = Math.floor((Math.random() *3) +1);
    // console.log(computerChoice);
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

function tallyScore(winner){
    while (playerScore < 5 && computerScore < 5){
        if (winner == 1){
            playerScore++;
            gameNumber++;
            console.log("Game " + gameNumber);
            console.log("Player: " + playerScore);
            console.log("Computer: " + computerScore);
            roundDiv.textContent = `Game ${gameNumber}: ${result}`;
            playerDiv.textContent = `Player:  ${playerScore}`;
            computerDiv.textContent = `Computer:  ${computerScore}`;
            checkWinner();
            break;
        } else {
            computerScore++;
            gameNumber++;
            console.log("Game " + gameNumber);
            console.log("Player: " + playerScore);
            console.log("Computer: " + computerScore);
            roundDiv.textContent = `Game ${gameNumber}: ${result}`;
            playerDiv.textContent = `Player:  ${playerScore}`;
            computerDiv.textContent = `Computer:  ${computerScore}`;
            checkWinner();
            break;
            }
        }
}

function checkWinner() {
    if (playerScore == 5) {
        let winnerText = `Player wins! Congratulations!\nFinal Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`;
        alert(winnerText);
        location.reload();
    } else if (computerScore == 5) {
        
        alert(`Computer wins! better luck next time!\nFinal Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
        location.reload();
    } else {
        return;
    }
}


//getting player input for choice
// function getPlayerChoice(){
//     //let playerChoice = prompt("Please enter Rock, Paper or Scissors");
//     console.log(playerChoice);
//     return playerChoice;
// }

//let playerSelection = getPlayerChoice();
//let computerSelection = getComputerChoice();


//playing round 
function playRound(playerSelection, computerSelection){
    console.log("Player is " + playerSelection);
    console.log("Computer is " + computerSelection);
    
    if(playerSelection == computerSelection){
        result = "It's a draw!";
        gameNumber++;
        console.log("It's a draw!");
        console.log("Game " + gameNumber);
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
        roundDiv.textContent = `Game ${gameNumber}: ${result}`;
        playerDiv.textContent = `Player:  ${playerScore}`;
        computerDiv.textContent = `Computer:  ${computerScore}`;
        return result;
        
        
    }
    else {
        if(playerSelection == "Rock" && computerSelection == "Scissors"){
            result = "You win! " + playerSelection + " beats " + computerSelection;
            console.log(result);
            tallyScore(1);
            return result;
            
        }
        else if(playerSelection == "Paper" && computerSelection == "Rock"){
            result = "You win! " + playerSelection + " beats " + computerSelection;
            console.log(result);
            tallyScore(1);
            return result;
            
        }
        else if(playerSelection == "Scissors" && computerSelection == "Paper"){
            result = "You win! " + playerSelection + " beats " + computerSelection;
            console.log(result);
            tallyScore(1);
            return result;
            
        }
        else if(playerSelection == "Scissors" && computerSelection == "Rock"){
            result = "You lose! " + computerSelection + " beats " + playerSelection;
            console.log(result);
            tallyScore(0);
            return result;
            
        }
        else if(playerSelection == "Rock" && computerSelection == "Paper"){
            result = "You lose! " + computerSelection + " beats " + playerSelection;
            console.log(result);
            tallyScore(0);
            return result;
            
        }
        else if(playerSelection == "Paper" && computerSelection == "Scissors"){
            result = "You lose! " + computerSelection + " beats " + playerSelection;
            console.log(result);
            tallyScore(0);
            return result;
            
        }
    }
}






// function game(){
// alert(playRound(getPlayerChoice(), getComputerChoice()));
// alert(playRound(getPlayerChoice(), getComputerChoice()));
// alert(playRound(getPlayerChoice(), getComputerChoice()));
// alert(playRound(getPlayerChoice(), getComputerChoice()));
// alert(playRound(getPlayerChoice(), getComputerChoice()));
// }

//game();



//Generate a random option for the computer 
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber===0) {
        return "rock";
    } else if (randomNumber===1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Prompt user to select one option

function getUserChoice() {
    let userChoice = prompt("Choose between rock, scissors, paper").toLowerCase()
    if (userChoice !== "rock" && userChoice !== "scissors" && userChoice !== "paper"){
        alert("Invalid, try again")
        return getUserChoice()
    }
    return userChoice;
}

//Determine the winner by comparing user's choice with computer's choice and display message

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    console.log("User choice:", playerSelection); //why?
    console.log("Computer choice:", computerSelection); //why?? 

    if (playerSelection === computerSelection) {
        return "It's a tie, lucky you"; 
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "rock" && computerSelection === "scissors")
    ){
        return "You win! Nice one!"; 
    } else {
        return "Oh no, you lose :("; 
    }
}

//5 rounds, keeping score, and reporting a winner or loser at the end. 

function playGame() {
    
    let userScore =0;
    let computerScore=0;
    
    //Round 1 
    let result = (playRound (getUserChoice(), getComputerChoice()));
    if (result === "You win! Nice one!"){
        userScore++
    } else if (result === "Oh no, you lose :(") {
        computerScore++
    }
    console.log("User score: " + userScore + ". Computer score: " + computerScore);

    //Round 2
    result = (playRound (getUserChoice(), getComputerChoice()));
    if (result === "You win! Nice one!"){
        userScore++
    } else if (result === "Oh no, you lose :(") {
        computerScore++
    }
    console.log("User score: " + userScore + ". Computer score: " + computerScore);

    //Round 3
    result = (playRound (getUserChoice(), getComputerChoice()));
    if (result === "You win! Nice one!"){
        userScore++
    } else if (result === "Oh no, you lose :(") {
        computerScore++
    }
    console.log("User score: " + userScore + ". Computer score: " + computerScore);

    //Round 4
    result = (playRound (getUserChoice(), getComputerChoice()));
    if (result === "You win! Nice one!"){
        userScore++
    } else if (result === "Oh no, you lose :(") {
        computerScore++
    }
    console.log("User score: " + userScore + ". Computer score: " + computerScore);

    //Round 5
    result = (playRound (getUserChoice(), getComputerChoice()));
    if (result === "You win! Nice one!"){
        userScore++
    } else if (result === "Oh no, you lose :(") {
        computerScore++
    }
    console.log("User score: " + userScore + ". Computer score: " + computerScore);

    //Final result

    if (computerScore>userScore) {
        console.log("GAME OVER. You lost. Give it another try") 
    } else {
        console.log ("WINNER! Fancy another round?")
    }

}
    playGame()


    
    
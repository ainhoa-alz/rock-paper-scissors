
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

//Ask the user to select one option//
//Necesito una variable que guarde la respuesta del usuario y que sea case insensitivetambién una reacción si el usuario escribe otra cosa 

function getUserChoice() {
    let userChoice = prompt("Choose between rock, scissors, paper").toLowerCase()
    if (userChoice !== "rock" && userChoice !== "scissors" && userChoice !== "paper"){
        alert("Invalid, try again")
        return getUserChoice()
    }
    return userChoice;
}


//Determine the winner by comparing user's choice with computer's choice and display message//


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
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

let computerChoice = getComputerChoice();
let userChoice = getUserChoice();
console.log("Computer choice:", computerChoice)
console.log("User choice:", userChoice);
console.log(playRound(userChoice, computerChoice)) //pasamos como argumentos de la función





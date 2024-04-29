        function getComputerChoice(){
            let randomNumber = Math.floor(Math.random()*3);
            let computerSelection; 
            const computerHand = document.querySelector(".computer-hand")
            if (randomNumber===0) {
                computerSelection ="rock";
                computerHand.src ="images/rock.png"
                computerHand.style.width = "45px"; computerHand.style.height = "45px";
            } else if (randomNumber===1) {
                computerSelection ="paper";
                computerHand.src ="images/palm.png"
                computerHand.style.width = "45px"; computerHand.style.height = "45px";
            } else {
                computerSelection ="scissors"; 
                computerHand.src ="images/scissors.png"
                computerHand.style.width = "45px"; computerHand.style.height = "45px";
            }
            return computerSelection; // Añade esta línea para devolver computerSelection
        }

        const userHand = document.querySelector(".userHand")
        
    
        const rock = document.querySelector("#rock");
        rock.addEventListener("click", function(){
            let playerSelection = "rock";
            let computerSelection = getComputerChoice()
            playRound(playerSelection,computerSelection)
        } )

        const paper = document.querySelector("#paper");
        paper.addEventListener("click", function(){
            let playerSelection = "paper";
            let computerSelection = getComputerChoice();
            
        })

        const scissors = document.querySelector("#scissor")
        scissors.addEventListener("click", function() {
            let playerSelection = "scissors"
            let computerSelection = getComputerChoice()
            playRound(playerSelection, computerSelection)
        })
       
        function playRound(playerSelection, computerSelection) {
            
            const message = document.querySelector(".message");

            if (playerSelection === computerSelection) {
                message.textContent = "It's a tie, lucky you"; 
            } else if (
                (playerSelection === "paper" && computerSelection === "rock") || 
                (playerSelection === "scissors" && computerSelection === "paper") || 
                (playerSelection === "rock" && computerSelection === "scissors")
            ){
                message.textContent = "You win! Nice one!"; 
            } else {
                message.textContent = "Oh no, you lose :("; 
            }
        }
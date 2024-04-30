        function getComputerChoice(){
            let randomNumber = Math.floor(Math.random()*3);
            let computerSelection; 
            const computerHand = document.querySelector(".computer-hand")
            computerHand.style.width = "45px"; computerHand.style.height = "45px";
            if (randomNumber===0) {
                computerSelection ="rock";
                computerHand.src ="images/rock.png"
            } else if (randomNumber===1) {
                computerSelection ="paper";
                computerHand.src ="images/palm.png"
            } else {
                computerSelection ="scissors"; 
                computerHand.src ="images/scissors.png"
            }
            return computerSelection; 
        }
        
    
        const rock = document.querySelector("#rock");
        rock.addEventListener("click", function(){
            let playerSelection = "rock";
            let computerSelection = getComputerChoice()
            const rockIcon = document.querySelector(".user-hand")
            rockIcon.src ="images/rock.png"
            rockIcon.style.width="45px"; rockIcon.style.height="45px"
            playRound(playerSelection,computerSelection)
        } )

        const paper = document.querySelector("#paper");
        paper.addEventListener("click", function(){
            let playerSelection = "paper";
            let computerSelection = getComputerChoice();
            const paperIcon = document.querySelector(".user-hand")
            paperIcon.src ="images/palm.png"
            paperIcon.style.width="45px"; paperIcon.style.height="45px"
            playRound(playerSelection,computerSelection)
            
        })

        const scissors = document.querySelector("#scissor")
        scissors.addEventListener("click", function() {
            let playerSelection = "scissors"
            let computerSelection = getComputerChoice()
            const scissorIcon = document.querySelector(".user-hand")
            scissorIcon.src ="images/scissors.png"
            scissorIcon.style.width="45px"; scissorIcon.style.height="45px"
            playRound(playerSelection, computerSelection)
        })

        const userScoreElement = document.querySelector(".user-score");
        const computerScoreElement = document.querySelector(".computer-score");
        let userScore = 0;
        let computerScore = 0;

        const restart = document.querySelector("button");
        restart.addEventListener("click", function() {
            
            computerScore = 0; 
            userScore = 0; 
            
            userScoreElement.textContent = userScore;
            computerScoreElement.textContent = computerScore; 
            
            const message = document.querySelector(".message");
            message.textContent = "Let's get this game started!"; 
        

            
            const hornUser = document.querySelector(".user-hand")
            hornUser.src ="images/horn.png"
            hornUser.style.width="35px"; hornUser.style.height="35px"
            const hornComputer = document.querySelector(".computer-hand")
            hornComputer.src ="images/horn.png"
            hornComputer.style.width="35px"; hornUser.style.height="35px"
            
             
            const overlays = document.querySelectorAll(".overlay");
            overlays.forEach(overlay => overlay.remove());

    
            const helpText = document.querySelector(".help-text");
            helpText.textContent = "CHOOSE AN OPTION";
        })

        function disablePlayerOption(){
              
            const rockOption = document.querySelector("#rock");
            const paperOption = document.querySelector("#paper");
            const scissorOption = document.querySelector("#scissor");

                   
            const overlayRock = document.createElement("div");
            overlayRock.classList.add("overlay");

            const overlayPaper = document.createElement("div");
            overlayPaper.classList.add("overlay");

            const overlayScissor = document.createElement("div");
            overlayScissor.classList.add("overlay");

                    
            rockOption.insertAdjacentElement("afterend", overlayRock);
            paperOption.insertAdjacentElement("afterend", overlayPaper);
            scissorOption.insertAdjacentElement("afterend", overlayScissor);
        
            const helpText = document.querySelector(".help-text");
            helpText.textContent = "RESTART GAME"

            
        }
       
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
                userScore++
                
            } else {
                message.textContent = "Oh no, you lose :("; 
                computerScore++
                
            }

            userScoreElement.textContent = userScore;
            computerScoreElement.textContent = computerScore; 

            if (computerScore === 5) {
                message.textContent = "GAME OVER \uD83C\uDF89";
                computerScore = 0; 
                userScore = 0; 
                disablePlayerOption();
            } else if (userScore === 5) {
                message.textContent = "Congratulations! You've won \uD83C\uDF89!";
                computerScore = 0; 
                userScore = 0; 
                disablePlayerOption();
                
            }
        
        }


       
        
    

    
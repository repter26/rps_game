
  function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice === 0) {
        return "rock"
    } else if(computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }

  }

  function getHumanChoice() {
    return prompt("Please enter your choice, r for rock, p for paper, and s for scissors").toLowerCase;

  }

  



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    

    function playRound(humanChoice, computerChoice){
    if(computerChoice === "rock") {
        if(humanChoice === "rock") {
            console.log("tie" + humanScore
            + " : " + computerScore);
        } else if(humanChoice === "paper") {
              humanScore++;
            console.log("you win!" + humanScore
            + " : " + computerScore
            );
          
        } else {
                computerScore++;
            console.log("you lose" + humanScore
            + " : " + computerScore);
        
        }

    } else if(computerChoice === "paper") {
         if(humanChoice === "rock") {
            computerScore++;
            console.log("you lose" + humanScore
            + " : " + computerScore);
          
        } else if(humanChoice === "paper") {
            console.log("tie" + humanScore
            + " : " + computerScore);
        } else {
            humanScore++;
            console.log("you win!" + humanScore
            + " : " + computerScore);
            
        }

    } else {
          if(humanChoice === "rock") {
            humanScore++;
            console.log("you win!" + humanScore
            + " : " + computerScore);
            
            
        } else if(humanChoice === "paper") {
            console.log("tie" + humanScore
            + " : " + computerScore);
        } else {
            computerScore++;
            console.log("you lose" + humanScore
            + " : " + computerScore);
            
        }

    }

  }
    for(let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("==============================")

    }
    
}

playGame();


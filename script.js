
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


  



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const results = document.querySelector("#results");

    const p =  document.createElement("p");
    function playRound(humanChoice, computerChoice){
    if(computerChoice === "rock") {
        if(humanChoice === "rock") {
            p.textContent = "tie" + humanScore
            + " : " + computerScore;
        } else if(humanChoice === "paper") {
              humanScore++;
            p.textContent = "you win!" + humanScore
            + " : " + computerScore;
          
        } else {
                computerScore++;
            p.textContent = "you lose" + humanScore
            + " : " + computerScore;
        
        }

    } else if(computerChoice === "paper") {
         if(humanChoice === "rock") {
            computerScore++;
            p.textContent = "you lose" + humanScore
            + " : " + computerScore;
          
        } else if(humanChoice === "paper") {
            p.textContent = "tie" + humanScore
            + " : " + computerScore ;
        } else {
            humanScore++;
            p.textContent = "you win!" + humanScore
            + " : " + computerScore;
            
        }

    } else {
          if(humanChoice === "rock") {
            humanScore++;
            p.textContent = "you win!" + humanScore
            + " : " + computerScore;
            
            
        } else if(humanChoice === "paper") {
            p.textContent = "tie" + humanScore
            + " : " + computerScore;
        } else {
            computerScore++;
            p.textContent = "you lose" + humanScore
            + " : " + computerScore;
            
        }

    }
      results.appendChild(p);

      if(humanScore >= 5) {
        p.textContent = "human wins!"
       results.appendChild(p);
  } else if(computerScore >= 5) {
     p.textContent = "computer wins!"
    results.appendChild(p);
  }

  }






    

    const rbtn = document.querySelector("#rbtn");
    const pbtn = document.querySelector("#pbtn");
    const sbtn = document.querySelector("#sbtn");

    rbtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    pbtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    sbtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
    console.log("==============================")
    
}

playGame();




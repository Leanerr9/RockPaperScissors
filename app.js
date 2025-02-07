
// computer choice
function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
};
// console.log(getComputerChoice());

// human choice
function getHumanChoice() {
    const validChoices = ["rock","paper","scissors"];
    let userChoice = prompt("Please select (rock, paper or scissors):").toLowerCase();

    if (validChoices.includes(userChoice)) {
        // return valid choices
        return userChoice;
    } else {
        // prompt error message for invalid choice
        prompt = "Invalid choice. Please enter rock , paper or scissors.";
    };
  };
// console.log(getHumanChoice());
  
// logic to play entire game
function playGame() {
 // Variables to keep track of scores
 let humanScore = 0;
 let computerScore = 0; 

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
// determining who wins
if (humanChoice === computerChoice) {
    return `Both choose ${humanChoice},It's a Draw! Try again.`;

} else if (
    (humanChoice === "rock" && computerChoice ==="scissors")||
    (humanChoice === "paper" && computerChoice ==="rock")||
    (humanChoice === "scissors" && computerChoice ==="paper")
) {
  // increments to change score
    humanScore++;
    return `winner! ${humanChoice} beats ${computerChoice},Can you win again?`;
} else { 
    (computerChoice === "rock" && humanChoice ==="scissors")||
    (computerChoice === "paper" && humanChoice ==="rock")||
    (computerChoice === "scissors" && humanChoice ==="paper")
     // increments to change score
     computerScore++;
   return `Better luck next time. ${computerChoice} beats ${humanChoice} Try again!`;
  }
}

// play 5 rounds
const choices = ["rock","paper","scissors"];

for (let i = 0; i < 5; i++) {
    const humanChoice = prompt("Please select (rock, paper or scissors):").toLowerCase();
    const computerChoice = choices[Math.floor(Math.random()*3)]; 

    playRound(humanChoice, computerChoice);
}

// declare winner
console.log(`Final score - you:${humanScore}, computer:${computerScore}`);

// code for if you manage to beat the computer
if (humanScore > computerScore) {
    console.log("congratulations! You are the overall winner!");
    } else if 
// code for the computer teaching you a lesson!
      (computerScore > humanScore) {
        console.log("Sorry! The house wins.");
// code for the unexpected happening & results in a draw
    } else {
      console.log("What a game,it's a draw!");
    }
 
}

//Let the games begin..
playGame();


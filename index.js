//              Rock Paper Scissors Project

//Variables
let round = 1;
var playerScore = 0;
var computerScore = 0;
//const computerSelection = computerPlay();
//const playerSelection = prompt('Choose Rock, Paper, or Scissors'); 


//Returns a random answer for the computer
function computerPlay() {
    const answers = ["Rock", "Paper", "Scissors"];   
    const answer = answers[Math.floor(Math.random() * answers.length)];
    return answer;
}

function game(){
    //computer select a answer 
const computerSelection = computerPlay();
    //player select a answer 
const playerSelection = prompt('Choose Rock, Paper, or Scissors'); 
var playerAnswer = capitalize(playerSelection);
// capitalize the players answer
    function capitalize(string) {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
    //plays a round and decides who won 
    function playRound(playerAnswer, computerSelection) {
        if (playerAnswer === computerSelection) {
            console.log("It's a tie! Go again.")
            return "It's a tie!";
        } else if (
            playerAnswer === "Rock" && computerSelection === "Scissors" ||
            playerAnswer === "Paper" && computerSelection === "Rock" ||
            playerAnswer === "Scissors" && computerSelection === "Paper"
        ) {
            console.log("You gained a point");
            return playerScore++;
            
        } else if (
            playerAnswer === "Rock" && computerSelection === "Paper" ||
            playerAnswer === "Paper" && computerSelection === "Scissors"  ||
            playerAnswer === "Scissors" && computerSelection === "Rock"
        ) {
            console.log("Computer gained a point!");
            return computerScore++;
        } else (
            console.log("Check your spelling.")
        )
           
    };
    console.log("You: " + playerAnswer + "     Computer: " + computerSelection);
    // play the round 
    playRound(playerAnswer, computerSelection);
    console.log("Computer: " + computerScore + "        You: " + playerScore + "     Round: " + round);
    round++;
  
    
    function end(round, playerScore, computerScore){
        //console.log(playerScore, computerScore, round);
        if (round >= 5 && playerScore > computerScore){
            console.log("You won")
        } else if (
            round >= 5 && playerScore < computerScore
        ) {
            console.log('You lost')
        } else {
            return
        }
    }
end(round, playerScore, computerScore);
console.log(computerScore, playerScore, round);

}

function reset(computerScore, playerScore, round) {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
}
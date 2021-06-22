//              Rock Paper Scissors Project




 
//Variables

var playerScore = 0;
var computerScore = 0;
const computerSelection = computerPlay();
const playerSelection = prompt('Choose Rock, Paper, or Scissors'); 
var playerAnswer = capitalize(playerSelection);

//Returns a random answer for the computer
function computerPlay() {
    const answers = ["Rock", "Paper", "Scissors"];   
    const answer = answers[Math.floor(Math.random() * answers.length)];
    console.log("Computer: " + answer);
    return answer;
}

//Capitalizes the Players answer
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
console.log("You: " + playerAnswer);

//plays one round of the game
function playRound(playerAnswer, computerSelection) {
    if (playerAnswer === computerSelection) {
        console.log('Its a tie');
    } else if (
        playerAnswer === "Rock" && computerSelection === "Scissors" ||
        playerAnswer === "Paper" && computerSelection === "Rock" ||
        playerAnswer === "Scissors" && computerSelection === "Paper"
    ) {
        console.log("You gained a point")
    } else if (
        playerAnswer === "Rock" && computerSelection === "Paper" ||
        playerAnswer === "Paper" && computerSelection === "Scissors" ||
        playerAnswer === "Scissors" && computerSelection === "Rock"
    ) {
        console.log("Computer gained a point!");
    } else (
        console.log("Check your spelling.")
    )
};
playRound(playerAnswer, computerSelection)
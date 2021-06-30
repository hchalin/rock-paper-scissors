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
        playerAnswer === "Paper" && computerSelection === "Scissors" ||
        playerAnswer === "Scissors" && computerSelection === "Rock"
    ) {
        console.log("Computer gained a point!");
        return computerScore++; 
    } else (
        console.log("Check your spelling.")
    )
};
playRound(playerAnswer, computerSelection)
console.log("You have " + playerScore + " points. The computer has " + computerScore + " points.");

//create a function called game() that will loop through the playRound() function up to 5 and keep track of the score.

function game() {
    playRound(playerAnswer, computerSelection);
    computerPlay();
    playerSelection();
}


//make one function that calls the player & computer to select a answer, decide between the two who won and add points accordingly.

function game(){
    //computer select a answer 
    const computerSelection = computerPlay();
    //player select a answer 
    const playerSelection = prompt('Choose Rock, Paper, or Scissors'); 
    computerPlay()

    //decide who won 
    //add Points to who won
    //when either the computer or player has five declare a winner
}
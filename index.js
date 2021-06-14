//              Rock Paper Scissors Project


//Returns a random answer for the computer
function computerPlay() {
    const answers = ["Rock", "Paper", "Scissors"];   
    const answer = answers[Math.floor(Math.random() * answers.length)];
    console.log("Computer: " + answer);
    return answer;
}

//Variables
const computerSelection = computerPlay();
const playerSelection = prompt('Choose Rock, Paper, or Scissors'); 
var playerAnswer = capitalize(playerSelection);


//Capitalizes the Players answer
function capitalize(string) {
    string.toLowerCase();
    return string[0].toUpperCase() + string.toLowerCase().slice(1);
}
console.log(capitalize("You: " + playerSelection));

//plays one round of the game
function playRound(playerAnswer, computerSelection){
    if (playerAnswer === computerSelection) {
        console.log("It's a tie! Go again!")
    } else if (playerAnswer === "Rock" && computerSelection === "Scissors") {
        console.log('Nice! You won!')
    } else if (playerAnswer === "Paper" && computerSelection === "Rock") {
        console.log('Nice! You won!')
    } else if (playerAnswer === "Scissors" && computerSelection === "Paper") {
        console.log('Nice! You won!')
    } else {
        console.log('You lost');
    };
};

playRound(playerAnswer, computerSelection);




 


//              Rock Paper Scissors Project


//Returns a random answer for the computer
function computerPlay() {
    const answers = ["Rock", "Paper", "Scissors"];   
    const answer = answers[Math.floor(Math.random() * answers.length)];
    console.log(answer);
    return answer;
}


//Variables
const computerSelection = computerPlay();
const playerSelection = prompt('Choose Rock, Paper, or Scissors'); // potential problem in future, might need to turn this into a array to have the player select.
var playerAnswer = capitalize(playerSelection);





//Capitalizes the Players answer
function capitalize(string) {
    string.toLowerCase();
    return string[0].toUpperCase() + string.toLowerCase().slice(1);
}
console.log(capitalize(playerSelection));




//plays one round of the game
function playRound(playerAnswer, computerSelection) {
    if (playerAnswer ===  computerSelection) {
        console.log("It's a tie! Go again!");
    } else {
        console.log("something");  
    }
    
  
};

playRound(playerAnswer, computerSelection);

 


/*  Write a function that plays a single round of the game.
    The funtion should take 2 Parameters, "playerSelection", and "computerSelection"
    It should return a string that declares the winner of the round
    "You Lose, Rock beats Scissors!"
    Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.splice(1);
        }
*/
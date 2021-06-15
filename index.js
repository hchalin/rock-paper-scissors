//              Rock Paper Scissors Project

//Variables
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
    string.toLowerCase();
    return string[0].toUpperCase() + string.toLowerCase().slice(1);
}
console.log(capitalize("You: " + playerSelection));

//plays one round of the game
var i = 0;
/*while (i < 5){
    
    playRound(playerAnswer, computerSelection);
    console.log('You have ' + i  + ' points.');   
}
*/

do {
    playRound(playerAnswer, computerSelection);
    console.log(i);

} while (i<5);
function playRound(playerAnswer, computerSelection){
    if (playerAnswer === computerSelection) {
        return "It's a tie! Go again! You have " + i + " points.";
    } else if (playerAnswer === "Rock" && computerSelection === "Scissors") {
        return 'Nice! You won! You have ' + i++ + ' points';
    } else if (playerAnswer === "Paper" && computerSelection === "Rock") {
        return 'Nice! Yofu won! You have ' + i++ + ' points'
    } else if (playerAnswer === "Scissors" && computerSelection === "Paper") {
        return 'Nice! You won! You have ' + i++ + ' points'
    } else {
        return 'You lost this round.  You have ' +  i++ + ' points.';
    };   
};






 


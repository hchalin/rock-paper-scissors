# rock-paper-scissors
Rock, Paper, Scissors project for the odin project

commit 1:
    Added all the variables and proper funtions to promt player to pick a answer, have the computer pick a random answer, and compare the two with a if statement.
    problem: the function that compares the two variable chosen by the computer and player will no work.

commit 2:
    Fix the function, did not add parameter to be pushed through the funtion.  ex:
    playRound();
    -->
    playRound(playerAnswer, computerSelection);

commit 3: 
    Finished the playRound() function and it accurately decides who wins the round


commit 4: 
    Everything works.  Now I just need to make the "Go Again" Btn call the play round funtion.  Everytime you refresh the page it just rests all the code and restores all the variables to their original values... ie not storing them.  Once i impliment the button i can set a maximum score to end the game once a certain score is reached...

    Linked the button to the function but all the variables are chosen once and stay the same until the page refreshes.  Need to make the button call the playRound() funtion and call for new variables...  one possible solution is to place all the called variable inside the playRound() funtion and nest other funtions within accordingly.
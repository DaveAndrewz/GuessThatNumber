// ! GUESS THAT NUMBER GAME ! \\


// ! VARIABLES ! \\
// ? Message to be used throughout the file/project ? \\
const enterNumText = `Please enter a number greater than zero`;
// ? For restarting the game ? \\
let restartGame = true;
// ? For storing the range of the random number that is going to be created ? \\
let rangeNum;
// ? For storing the number to be guessed ? \\
let randomNum;
// ? For storing the number of attempts that the user has left ? \\
let attempts;
// ? For storing the users guess ? \\
let guess;
// ? For storing users response to play again or not play again ? \\
let playAgain;



// ! GAME MEAT ! \\


// ? STARTING ALERT MESSAGE TO SAY WELCOME TO GAME ? \\
//
alert(`Welcome to "GUESS THAT NUMBER!!" 
Please click "OK" to start the game.`);

// ? Game restarts as long as restartGame has a value of TRUE ? \\
//
while (restartGame){
    //  Asks user to enter number to set the upper bound for the random number that will be created (AKA Number to be guessed).
    rangeNum = prompt(`Please enter a maximum number for the range:`);
    //  Using parseInt to attempt to convert the users response to a number value. (NOTE: The value returned from a prompt is ALWAYS a string value). Also, if the value cannot be converted then the value returned will be NaN (Not A Number)
    rangeNum = parseInt(rangeNum); // tries to convert prompt entry into a number value.

    // 
    while (!rangeNum || rangeNum < 1){
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }


    break; // infinite loop safeguard
}


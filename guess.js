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
const rangeTooHigh = `Please select an amount equal to or less than ${rangeNum}`



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
    rangeNum = parseInt(rangeNum); // tries to convert prompt entry into a number value. parseInt converts strings to numbers if possible.

    // Verifies the users entry for the range number is a number greater than zero (Note: NaN has a default boolean value of false. Also, all numbers, positive and negative, have a boolean value of true, except for 0 which has a boolean value of false).
    while (!rangeNum || rangeNum < 1){
        // rangeNum = prompt(enterNumText);
        // rangeNum = parseInt(rangeNum);
        rangeNum = parseInt(prompt(enterNumText)); // condensed version of above two lines.
    }

    // Creates the random number (AKA number to be guessed by the user 'randomNum') using the range number entered by the user ('rangeNum'). 
    randomNum = Math.floor(Math.random() * rangeNum) + 1; // parenthesis will be worked out first because of order of operations


    // Prompts user to enter a number of attempts allowed (AKA Number of guesses). Also attempting to convert the user input to a number value with 'parseInt'
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

    // Verifies the users entry for a number of attempts allowed is a number greater than zero.
    while (!attempts || attempts < 1){
        attempts = parseInt(prompt(enterNumText));
    };
    while (attempts > rangeNum){
        attempts = parseInt(prompt(rangeTooHigh));
    };

    // Asks user to enter a guess in the range that they selected
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left`);

    // Continues looping until the user guesses the correct number OR runs out of attempts. (Note: Loops until a BREAK keyword is run)
    while (true){
        // Attempts to convert the users guess into a number
        guess = parseInt(guess);

        // Verifies the users guess is a number greater than 0 and LESS than the number entered for the range set by the user
        while (!guess || guess < 1 || guess > rangeNum){
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
        }


        
        break;
    }

    break; // infinite loop safeguard
}


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
        attempts = parseInt(prompt(`Please enter a range from 1 to ${rangeNum}`));
    };

    // Asks user to enter a guess in the range that they selected
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left`);

    // Continues looping until the user guesses the correct number OR runs out of attempts. (Note: Loops until a BREAK keyword is run)
    while (true){
        // Displays the number/answer when a secret code is entered
        if (guess === `I'm a huge cheater`){
            alert(`You entered the secret passcode:
            The answer you require is ${randomNum}`);
            prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left`);
        }



        // Attempts to convert the users guess into a number
        guess = parseInt(guess);

        // Verifies the users guess is a number greater than 0 and LESS than the number entered for the range set by the user
        while (!guess || guess < 1 || guess > rangeNum){
            guess = parseInt(prompt(`Please enter a guess amount range from 1 to ${rangeNum}`));
        };

        // Removes an attempt
        attempts--;

        // Checks if the user guessed correctly. If so the game ends. (NOTE: The break ends the loop)
        if (guess === randomNum){
            alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
            break;

        // Checks to see if the user has any attempts left 
        } else if (attempts === 0){
            alert(`I'M SORRY YOU RAN OUT OF ATTEMPTS!
            The correct number was ${randomNum}`);
            break;

        // Checks if the users guess was too low and prompts user to guess again if that is the case
        } else if (guess < randomNum){
            guess = prompt(`You're too low!
            You have ${attempts} left`);

        // Checks if the users guess was too high and prompts user to guess again if that is the case
        } else { // not another 'else if' because if its not too the only other possibility is too high
            guess = prompt(`You're too high!
            You have ${attempts} left`)
        }
    }

    // Prompts the user with the option to play again.
    playAgain = prompt(`Do you wanna play again?
    Please enter Y or N`);
    
    // Loop continues until user submits a valid response
    while (true){
    // Checks if the users response is No (AKA "N" or "n")
        if (playAgain.toUpperCase() === "N") {
    // Alerts the user that the game is over and the game/loop does NOT restart
            alert(`Thanks for playing!`);
            restartGame = false
            break;

    // Checks if the users response is Yes (AKA "Y" or "y")
        } else if (playAgain.toUpperCase() === "Y") {
    // The game retarts here
            break;
    //Prompts the user to enter a valid response and starts THIS loop again
        } else {
            playAgain = prompt(`Please only enter "Y" or "N"`);
        }
    }
    // break; // infinite loop safeguard
}


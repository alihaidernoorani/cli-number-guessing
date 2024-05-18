#!/usr/bin/env node
// Import required modules
import inquirer from "inquirer"; // For handling user input
import chalk from "chalk"; // For styling console output
// Function to generate a random number between 1 and 10
function randomNumberGenerator() {
    const randomNumber = Math.floor((Math.random()) * 10) + 1; // Generates a random integer between 1 and 10
    return randomNumber;
}
// Display welcome message
console.log(chalk.bgYellow.black("Welcome To CLI Number Guessing Game\n"));
// Flag to control the end of the game
let end = false;
// Main game loop
do {
    // Prompt the user to guess a number between 1 and 10
    const answer = await inquirer.prompt({
        name: "userGuessedNumber",
        message: chalk.yellow("Guess the number between 1-10:"),
        type: "number",
    });
    // Check if the user input is a valid number
    if (!isNaN(answer.userGuessedNumber)) {
        // Compare the user's guess with the randomly generated number
        if (answer.userGuessedNumber === randomNumberGenerator()) {
            console.log(chalk.green("Congratulations! You guessed the correct number\n"));
        }
        else {
            console.log(chalk.red("Your guess was wrong\n"));
        }
    }
    else {
        // Handle invalid input
        console.log(chalk.red.bold("Enter a valid integer\n"));
        continue; // Skip the rest of the loop iteration
    }
    // Ask the user if they want to play again
    const endanswer = await inquirer.prompt({
        name: "endGame",
        message: chalk.cyan("Would you like to play again?"),
        type: "list",
        choices: ["Yes", "No"]
    });
    // Check if the user wants to end the game
    if (endanswer.endGame === "No") {
        end = true; // Set the end flag to true to exit the loop
    }
    // Add an empty line for readability
    console.log("");
} while (!end); // Continue the loop until the user chooses to end the game

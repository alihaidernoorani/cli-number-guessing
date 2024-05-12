import inquirer from "inquirer";
import chalk from "chalk";
function randomNumberGenerator() {
    const randomNumber = Math.floor((Math.random()) * 10) + 1;
    return randomNumber;
}
console.log(chalk.bgYellow.black("Welcome To CLI Number Guessing Game"));
let end = false;
do {
    const answer = await inquirer.prompt({
        name: "userGuessedNumber",
        message: chalk.yellow("\nGuess the number between 1-10:"),
        type: "number",
        validate: input => {
            if (!isNaN(input) && Number.isInteger(input)) {
                return true;
            }
            else {
                return "Enter a valid integer";
            }
        }
    });
    if (parseInt(answer.userGuessedNumber) === randomNumberGenerator()) {
        console.log(chalk.green("Congratulations! You guessed the correct number"));
    }
    else {
        console.log(chalk.red("Your guess was wrong"));
    }
    const endanswer = await inquirer.prompt({
        name: "endGame",
        message: chalk.cyan("Do you want to continue game"),
        type: "list",
        choices: ["Yes", "No"]
    });
    if (endanswer.endGame === "No") {
        end = true;
    }
} while (!end);

import inquirer from "inquirer";
import chalk from "chalk";

function randomNumberGenerator(){
    const randomNumber = Math.floor((Math.random())*10) + 1;
    return randomNumber;
}

console.log(chalk.bgYellow.black("Welcome To CLI Number Guessing Game\n"))

let end = false;

do{
    const answer = await inquirer.prompt(
        {
            name: "userGuessedNumber",
            message: chalk.yellow("Guess the number between 1-10:"),
            type: "number",
        }
    )
    if (!isNaN(answer.userGuessedNumber) === true) {
        if (answer.userGuessedNumber === randomNumberGenerator()){
            console.log(chalk.green("Congratulations! You guessed the correct number"));
        }
        else{
            console.log(chalk.red("Your guess was wrong\n"));
        }
    }
    else{
        console.log("Enter a valid integer");
        continue;
    } 

    const endanswer = await inquirer.prompt(
        {
            name: "endGame",
            message: chalk.cyan("Do you want to continue game\n"),
            type: "list",
            choices: ["Yes", "No"]
        }
    )
    if (endanswer.endGame === "No") {
        end = true;        
    }

    console.log("");
    
} while (!end)
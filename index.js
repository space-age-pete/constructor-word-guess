var Word = require("./word.js");
var inquirer = require("inquirer");
var wordBank = ["algebra", "jazz", "bespoke", "jungle", "burgess", "cowboy", "retrospecticus", "hollow", "somnambulist"];
var currentWord = "";
var message = "Hello!, would you like to play a game of hangman?";

function chooseNewWord() {
    var index = Math.floor(Math.random() * wordBank.length);
    currentWord = new Word(wordBank[index]);
}
chooseNewWord();
function playGame() {
    console.log("\n" + currentWord.toString() + "\n");
    inquirer.prompt([
        {
            type: "input",
            name: "letterGuess",
            message: "Guess a Letter",
            validate: function (input) {
                if (!+input && input.length === 1) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    ]).then(function (response) {
        if (currentWord.guess(response.letterGuess)) {
            console.log(`Yes, there is a(n) ${response.letterGuess} in the word`);
        }
        else {
            console.log(`Sorry, there is no ${response.letterGuess} in the word`);
        }
        if (currentWord.toString().includes("_")) {
            playGame();
        }
        else {
            console.log(currentWord.toString());
            console.log("You win!");
            message = "Would you like to play another round?"
            startPrompt();
        }

    })
}

function startPrompt() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "confirm",
            message: message
        }
    ]).then(function (response) {
        if (response.confirm) {
            chooseNewWord();
            playGame();
        }
    })
}

startPrompt();
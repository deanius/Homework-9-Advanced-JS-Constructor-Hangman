var inquirer = require("inquirer");
var colors = require("colors");
var Game = require("./game.js");

colors.setTheme({
	silly: 'rainbow',
	input: 'grey',
	verbose: 'cyan',
	prompt: 'grey',
	info: 'green',
	data: 'grey',
	help: 'cyan',
	warn: 'yellow',
	debug: 'blue',
	error: 'red'
});

function newGame () {
	console.log("Welcome to Hangman!".silly.bold);

	gameTypePrompt = {
		type: "list",
		message: "Choose a topic:".yellow,
		choices: ["Superheroes", "Classmates"],
		name: "gameType"
	};

	inquirer.prompt(gameTypePrompt).then(response => {
		var gameType = response.gameType;

		switch(gameType) {
			case "Superheroes":
			var game = new Game.Superhero();
			break;

			case "Classmates":
			var game = Game.Classmate();
			break;

			default:
			console.log("That game type is not yet supported.")
		};

		if(game) { // FOR DEBUGGING
			console.log(game);
			// console.log(game.targetWord);
		}; // FOR DEBUGGING

		console.log(`\n  ${game.displayWord}\n`);
		
		function guessALetter() {
			var guessALetterPrompt = {
				type: "input",
				message: "Guess a letter!".input,
				name: "guessedLetter"
			};

			return inquirer.prompt(guessALetterPrompt)
		};

		var guessAllLetters = Promise.resolve();

		function guessLoop () {
			if (game.gameOver === false) {

				guessAllLetters = guessAllLetters
					.then(guessALetter)
					.then(response => game.evaluateLetter(response.guessedLetter.toUpperCase()))
					.then(() => console.log(`\nIncorrect Guesses: ${game.displayIncorrectGuesses}`))
					.then(() => console.log(`Lives Remaining: ${game.livesRemaining}`))
					.then(() => console.log(`\n  ${game.displayWord}\n`))
					.then(() => game.evaluateGameState())
					.then(() => guessLoop())
			} else {
				console.log("\nPlay again?");
			}
		}; // guessLoop(){}

		guessLoop();

	}); // inquirer.gameTypePrompt()
}; // newGame(){}

newGame();
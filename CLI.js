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

console.log("Welcome to Hangman!".silly);

gameTypePrompt = {
	type: "list",
	message: "Choose a topic:",
	choices: ["Superheroes", "Classmates"],
	name: "gameType"
};

inquirer.prompt(gameTypePrompt).then(response => {
	var gameType = response.gameType;
	
	switch(gameType) {
		case "Superheroes":
		var word = new Game.Superheroes();
		break;

		case "Classmates":
		var word = Game.Classmates();
		break;

		default:
		console.log("That game type is not yet supported.")
	};

	if(word) { // FOR DEBUGGING
		// console.log(word);
		console.log(word.chosenWord);
		console.log(word.displayWord);
	};
});
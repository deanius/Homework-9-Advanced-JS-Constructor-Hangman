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
	console.log(gameType);
	
	switch(gameType) {
		case "Superheroes":
		var displayWord = Game.superheroes();
		break;

		case "Classmates":
		var displayWord = Game.classmates();
		break;

		default:
		console.log("That game type is not yet supported.")
	};

	console.log(displayWord);
});
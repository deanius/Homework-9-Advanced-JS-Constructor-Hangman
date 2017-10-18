var inquirer = require("inquirer");
var colors = require("colors");
var Game = ("./game.js");

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
	
	if(gameType === "Superheroes") {

	}
});
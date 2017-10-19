var Word = require("./Word.js");
var colors = require("colors");

function Superhero () {
	// console.log("Superhero(){}");
	var superheroWords = ["Wolverine", "Batman", "Black Panther", "Superman", "Iron Man", "Aquaman", "Wonder Woman", "Hawkeye", "Spider-Man", "Daredevil", "Green Arrow", "Black Canary", "Captain America", "Batgirl", "Hellboy", "Hulk", "Iron Fist", "Catwoman", "Elektra", "Ghost Rider", "Thor", "Robin", "Silver Surfer", "The Human Torch", "Black Widow", "Professor Xavier", "Beast", "Black Lightning", "Captain Marvel", "Doctor Strange", "The Vision", "Ant-Man", "Supergirl", "Captain Planet"];
	this.targetWord = superheroWords[Math.floor(Math.random() * superheroWords.length)];
	
	this.word = new Word(this.targetWord);
	this.displayWord = this.word.displayWord();
};

Superhero.prototype.evaluateLetter = function(guessedLetter) {
	// for validating that key presses are actually letters
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	console.log("evaluateLetter");
	console.log(`you guessed: ${guessedLetter}`);
	
	var yourGuess = guessedLetter.toLowerCase()
	if(alphabet.indexOf(yourGuess) > -1) {
		console.log("that's a letter".green);

	} else {
		console.log("Please input a letter.".error);
	}
};

function Classmate() {
	var classmateWords = ["Imran", "Eva", "Jean-Christophe", "Nicole", "Ali", "Grant", "Andrew"];
	
	console.log("That game type is not yet supported.");
};

module.exports = {
	Superhero: Superhero,
	Classmate: Classmate
};
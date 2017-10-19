var Word = require("./Word.js");

function Superhero () {
	// console.log("Superhero(){}");
	var superheroWords = ["Wolverine", "Batman", "Black Panther", "Superman", "Iron Man", "Aquaman", "Wonder Woman", "Hawkeye", "Spider-Man", "Daredevil", "Green Arrow", "Black Canary", "Captain America", "Batgirl", "Hellboy", "Hulk", "Iron Fist", "Catwoman", "Elektra", "Ghost Rider", "Thor", "Robin", "Silver Surfer", "The Human Torch", "Black Widow", "Professor Xavier", "Beast", "Black Lightning", "Captain Marvel", "Doctor Strange", "The Vision", "Ant-Man", "Supergirl", "Captain Planet"];
	this.targetWord = superheroWords[Math.floor(Math.random() * superheroWords.length)];
	
	this.word = new Word(this.targetWord);
	this.displayWord = this.word.displayWord();

	this.guesses = [];
	this.incorrectGuesses = [];
	this.displayIncorrectGuesses = "";
	this.livesRemaining = 10;
	this.gameOver = false;
};

Superhero.prototype.evaluateLetter = function(guessedLetter) {
	// for validating that key presses are actually letters
	var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	
	// if the guess is not a letter, error
	if(alphabet.indexOf(guessedLetter) === -1) {
		console.log("Please input a letter.".warn);
	} else{
		// if the letter has already been guessed
		if (this.guesses.indexOf(guessedLetter) > -1) {
			console.log("You've already guessed that letter.".warn);

		// if the letter is incorrect
		} else if(this.targetWord.toUpperCase().indexOf(guessedLetter) === -1) {
			this.incorrectGuesses.push(guessedLetter.red);
			this.displayIncorrectGuesses = this.incorrectGuesses.join(" ");
			this.livesRemaining--;
			console.log("Your guess was incorrect.".red);

		// if the letter is correct
		} else {
			this.word.checkIfWordContains(guessedLetter);
			this.displayWord = this.word.displayWord();
			console.log("Your guess was correct!".green);
		};

		// record all valid guesses
		this.guesses.push(guessedLetter);
	};
}; // evaluateLetter(){}

Superhero.prototype.evaluateGameState = function () {
	if(this.displayWord.indexOf("_") === -1) {
		console.log("\nYou win!".green);
		this.gameOver = true;
	} else if (this.livesRemaining < 1) {
		console.log("\nYou lose!".red);
		this.gameOver = true;
	};
}; // evaluateGameState(){}

function Classmate() {
	var classmateWords = ["Imran", "Eva", "Jean-Christophe", "Nicole", "Ali", "Grant", "Andrew"];
	
	console.log("That game type is not yet supported.");
};

module.exports = {
	Superhero: Superhero,
	Classmate: Classmate
};
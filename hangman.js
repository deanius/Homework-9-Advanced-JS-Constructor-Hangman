var inquirer = require("inquirer");

function hangman () {
	var possibleWords =  ["Imran", "Eva", "Jean-Christophe", "Nicole", "Ali", "Grant", "Andrew", "Wolverine", "Batman", "Black Panther", "Superman", "Iron Man", "Aquaman", "Wonder Woman", "Hawkeye", "Spider-Man", "Daredevil", "Green Arrow", "Black Canary", "Captain America", "Batgirl", "Hellboy", "Hulk", "Iron Fist", "Catwoman", "Elektra", "Ghost Rider", "Thor", "Robin", "Silver Surfer", "The Human Torch", "Black Widow", "Professor Xavier", "Beast", "Black Lightning", "Captain Marvel", "Doctor Strange", "The Vision", "Ant-Man", "Supergirl", "Captain Planet"];
	var wordChosen = false;
	// pick a word
	// turn the word into an object
	// turn the word into separate letters in the object
	// turn each letter into an object that contains information about
	// whether or not it's been guessed correctly
	var chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
	var Word = require("./Word.js");
	var wordObject = new Word(chosenWord);
	console.log(chosenWord);

	// display the word based on the booleans in the letter objects within
	// display the list of incorrect letters guessed (starts empty)
	// take an input from a user
	// validate the input
	// if correct, update the corresponding letter objects' booleans
	// if incorrect, add to list of incorrect letters guessed
	// check if all letter booleans are true
	// recursion/loop until all the letter booleans are true
	// once all letter booleans are true, game is over
	displayGame(wordObject);

};

// this function is recursive
function displayGame (input) {
	// takes wordObject as input and saves it
	var wordObject = input;

	// creates empty wordArray
	var wordArray = [];

	var guessedLetter = null;
	// goes through each letter in wordObject
	
	// set noLettersLeft to true
	var noLettersLeft = true;
	
	for(letter in wordObject) {
		// saves letter as thisLetter
		var thisLetter = wordObject[letter].value;
		// saves guessed value as thisBoolean
		var thisBoolean = wordObject[letter].guessed;

		// if thisBoolean is true
		if(thisBoolean) {
			// display the corresponding character
			var hiddenLetter = thisLetter;	
		} else {
			// otherwise, display it as _
			var hiddenLetter = "_";
		};
		// push the letters to the wordArray
		wordArray.push(hiddenLetter);

		// if there are any unguessed letters,
		if(thisBoolean === false) {
			// set noLettersLeft to false
			noLettersLeft = false;
		};
	};

	// turn wordArray into a string and display it
	var displayedWord = wordArray.join(" ");
	console.log(displayedWord);

	console.log(`noLettersLeft: ${noLettersLeft}`);
	// if there are no letters left
	if(noLettersLeft === true) {
		// run gameOver function
		gameOver();
	} else if(noLettersLeft === false) {
		// else, run guessLetter function
		guessLetter(wordObject);
	};
};

function gameOver() {
	console.log("game over");
};

function guessLetter(input) {
	var wordObject = input;

	var guessPrompt = {
		type: "input",
		message: `Guess a letter!`,
		name: "guessedLetter"
	};

	inquirer.prompt(guessPrompt).then(response => {
		var guessedLetter = response.guessedLetter;
		var guessedBoolean = wordObject[letter].guessed;

		// set noLettersLeft to true
		var noLettersLeft = true;
		
		for(letter in wordObject) {
			var thisLetter = wordObject[letter].value;
			var thisBoolean = wordObject[letter].guessed;

			if(guessedLetter.toLowerCase() === thisLetter.toLowerCase()) {
				wordObject[letter].guessed = true;
			};
		}; // for(letter in word){}
		
		displayGame(wordObject);
	}); //inquirer.guessPrompt()
};



hangman();
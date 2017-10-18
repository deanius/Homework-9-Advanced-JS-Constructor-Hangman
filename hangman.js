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
	var word = new Word(chosenWord);
	
	console.log(chosenWord);
	// console.log(word);

	// display the word based on the booleans in the letter objects within
	// display the list of incorrect letters guessed (starts empty)
	// take an input from a user
	// validate the input
	// if correct, update the corresponding letter objects' booleans
	// if incorrect, add to list of incorrect letters guessed
	// check if all letter booleans are true
	// recursion/loop until all the letter booleans are true

	// once all letter booleans are true, game is over

	var wordArray = [];
	for(letter in word) {
		var thisLetter = word[letter].value;
		var thisBoolean = word[letter].guessed;
		
		if(thisBoolean) {
			var hiddenLetter = thisLetter;	
		} else {
			var hiddenLetter = "_";
		};
		wordArray.push(hiddenLetter);
	};
	var displayedWord = wordArray.join(" ");

	var guess = {
		type: "input",
		message: `\n${displayedWord}\nGuess a letter!`,
		name: "guessedLetter"
	};

	inquirer.prompt(guess).then(response => {
		console.log(response.guessedLetter)
	});
};

hangman();
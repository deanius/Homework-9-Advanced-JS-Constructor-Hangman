var Letter = require("./Letter.js");

function Word(){};

Word.prototype.displayWord = function(chosenWord) {
	for (var i = 0; i < chosenWord.length; i++) {
		this[i] = new Letter(chosenWord[i]);
	};

	var lettersArray = [];

	for (letter in this) {
		if (typeof this[letter] === "object"){
			var thisLetter = this[letter].value;
			var guessed = this[letter].guessed;

			if(guessed) {
				var displayLetter = thisLetter;
			} else {
				var displayLetter = "_";
			};

			lettersArray.push(displayLetter);
		};
	};

	return displayWord = lettersArray.join(" ");
};

module.exports = Word;
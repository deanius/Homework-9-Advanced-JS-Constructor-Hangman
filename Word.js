var Letter = require("./Letter.js");

function Word(targetWord){
	for (var i = 0; i < targetWord.length; i++) {
		this[i] = new Letter(targetWord[i]);
	};
};

Word.prototype.displayWord = function() {
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
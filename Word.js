var Letter = require("./Letter.js");

function Word(word, wordChosen) {
	if(!wordChosen) {
		for (var i = 0; i < word.length; i++) {
			this[i] = new Letter(word[i]);
		};
	};


};

module.exports = Word;
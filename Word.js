// var Letter = require("./Letter.js");

function Word() {
	// if(!wordChosen) {
	// 	for (var i = 0; i < word.length; i++) {
	// 		this[i] = new Letter(word[i]);
	// 	};
	// };
	this.chosenWord = ""
};

Word.prototype.chooseWord = function(wordList) {
	this.chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
};

Word.prototype.getLetters = function() {
	console.log(this.chosenWord);
};

module.exports = Word;
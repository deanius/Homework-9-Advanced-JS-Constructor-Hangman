function Letter(letter) {
	this.value = letter;

	if(letter === " " || letter === "-") {
		this.guessed = true;
	} else {
		this.guessed = false;
	};
};

Letter.prototype.showLetter = function() {
	if (this.guessed === true) {
		return this.letter;
	} else {
		return "_"
	};
};

module.exports = Letter;
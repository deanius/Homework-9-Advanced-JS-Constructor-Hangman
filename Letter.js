function Letter(letter) {
	this.value = letter;

	if(letter === " " || letter === "-") {
		this.guessed = true;
	} else {
		this.guessed = false;
	};
};

module.exports = Letter;
var Word = require("./Word.js");
var colors = require("colors");

function superheroes () {
	console.log("superheroes()");
	var superheroWords = ["Wolverine", "Batman", "Black Panther", "Superman", "Iron Man", "Aquaman", "Wonder Woman", "Hawkeye", "Spider-Man", "Daredevil", "Green Arrow", "Black Canary", "Captain America", "Batgirl", "Hellboy", "Hulk", "Iron Fist", "Catwoman", "Elektra", "Ghost Rider", "Thor", "Robin", "Silver Surfer", "The Human Torch", "Black Widow", "Professor Xavier", "Beast", "Black Lightning", "Captain Marvel", "Doctor Strange", "The Vision", "Ant-Man", "Supergirl", "Captain Planet"];

	var word = new Word();
	word.chooseWord(superheroWords);

	var chosenWord = word.chosenWord;
	return chosenWord;
};

function classmates() {
	var classmateWords = ["Imran", "Eva", "Jean-Christophe", "Nicole", "Ali", "Grant", "Andrew"];
	
	console.log("That game type is not yet supported.");
};

module.exports = {
	superheroes: superheroes,
	classmates: classmates
};
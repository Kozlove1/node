const { characters, stealRing } = require('./characters.js')

let myCharacters = characters

myCharacters = stealRing(myCharacters, 'Gandalf')

for (const character of characters) {
	console.log(character.name, character.hasRing)
}

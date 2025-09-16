let characters = [
    {
        name: 'Frodo',
        race: 'Hobbit',
        hasRing: false
    },
    {
        name: 'Aragorn',
        race: 'Human',
        hasRing: false
    },
		{
			name: 'Gandalf',
			race: 'Wizard',
			hasRing: false
		},
		{
			name: 'Legolas',
			race: 'Elf',
			hasRing: false
		},
		{
			name: 'Gimli',
			race: 'Dwarf',
			hasRing: false
		},
		{
			name: 'Boromir',
			race: 'Human',
			hasRing: false
		},
		{
			name: 'Eowyn',
			race: 'Human',
			hasRing: false
		},
		{
			name: 'Faramir',
			race: 'Human',
			hasRing: false
		},
		{
			name: 'Samwise Gamgee',
			race: 'Hobbit',
			hasRing: false
		},
		{
			name: 'Peregrin Took',
			race: 'Hobbit',
			hasRing: false
		},
		{
			name: 'Meriadoc Brandybuck',
			race: 'Hobbit',
			hasRing: false
		},
]

function stealRing(character, owner) {
	characters.map(character => {
		return character.hasRing = owner === character.name
	})
}

module.exports = {
	characters,
	stealRing
}
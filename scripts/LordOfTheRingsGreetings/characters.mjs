export const characters = [
  {
    name: "Frodo",
    age: 51,
    race: "Hobbit",
    description: "The protagonist of the story.",
    reaction: "Thank you, but I'm just a simple hobbit from the Shire.",
  },
  {
    name: "Aragorn",
    age: 87,
    race: "Human",
    description: "The heir to the throne of Gondor.",
    reaction: "Your greeting is welcome, though I am but a ranger of the North.",
  },
  {
    name: "Legolas",
    age: 1000,
    race: "Elf",
    description: "The prince of Mirkwood.",
    reaction: "May the stars shine upon your path, friend.",
  },
  {
    name: "Gimli",
    age: 139,
    race: "Dwarf",
    description: "The dwarf warrior.",
    reaction: "Aye, and may your beard grow ever longer!",
  },
  {
    name: "Boromir",
    age: 37,
    race: "Human",
    description: "The captain of the fellowship.",
    reaction: "Gondor thanks you for your courtesy.",
  },
  {
    name: "Faramir",
    age: 37,
    race: "Human",
    description: "The son of Denethor.",
    reaction: "Your kindness honors the house of Denethor.",
  },
  {
    name: "Samwise Gamgee",
    age: 38,
    race: "Hobbit",
    description: "The gardener of the Shire.",
    reaction: "Well, that's very kind of you, Mr. Frodo would be pleased to hear it.",
  },
  {
    name: "Peregrin Took",
    age: 36,
    race: "Hobbit",
    description: "The son of Peregrin Took.",
    reaction: "That's very nice! Do you have any food to share?",
  },
  {
    name: "Meriadoc Brandybuck",
    age: 36,
    race: "Hobbit",
    description: "The son of Meriadoc Brandybuck.",
    reaction: "A Brandybuck always appreciates good manners!",
  },
  {
    name: "Gandalf",
    age: 1000,
    race: "Wizard",
    description: "The wizard.",
    reaction: "A wizard is never late, nor is he early. He arrives precisely when he means to... and your greeting is most welcome.",
  },
];


export function howTheyReactedToGreeting(character) {
  if (character.reaction) {
    console.log(`${character.name} reacted to the greeting: "${character.reaction}"`);
  } else {
    console.log(`${character.name} remained silent, unsure how to respond.`);
  }
}
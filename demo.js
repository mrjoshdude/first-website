console.log("hello computer");

// This is a comment

/* This is a block comment
   it can span many lines
   */

var demoVariable;

demoVariable = true;

console.log(demoVariable);

demoVariable = false;

console.log(demoVariable);

var bestPokemon = "Bulbasaur";

console.log("The best pokemon is " + bestPokemon);

var level = 5;

console.log("You get " + bestPokemon + " at level " + level);

level = level + 11;

console.log(bestPokemon + " evoles into Ivysaur at level " + level);

var numberOfApples = 7;
var numberOfPears = 3;
var numberOfStrawberries = 11;

var totalFruit;

totalFruit = numberOfApples + numberOfPears + numberOfStrawberries;

console.log(totalFruit);

var numberOfPeople = 4;

console.log("Each person has " + numberOfApples + " apples. There are 4 people. Therefore in total, there are " + numberOfPeople * numberOfApples + " apples.");

var moreFruit;

moreFruit = numberOfApples > numberOfPears;

console.log(moreFruit);

moreFruit = numberOfApples > numberOfStrawberries;

console.log(moreFruit);

console.log(numberOfApples == numberOfStrawberries);

numberOfApples = numberOfApples + 4;

console.log(numberOfApples == numberOfStrawberries);

numberOfApples = numberOfApples - 4;

console.log(bestPokemon == "Charmander");

if(moreFruit == true) {
    console.log("There are more apples than there are strawberries");
} 
else {
    console.log("There are more strawberries than there are apples");
}

numberOfApples = numberOfApples + 10;

moreFruit = numberOfApples > numberOfStrawberries;

if(moreFruit == true) {
    console.log("There are more apples than there are strawberries");
} 
else {
    console.log("There are more strawberries than there are apples");
}

if(moreFruit == true) {
    numberOfApples = numberOfApples - 10;
} 
else {
    numberOfApples = numberOfApples + 10;
}

console.log(numberOfApples);

moreFruit = numberOfApples > numberOfStrawberries;

if(moreFruit == true) {
    numberOfApples = numberOfApples - 10;
} 
else {
    numberOfApples = numberOfApples + 10;
}

console.log(numberOfApples);

moreFruit = numberOfApples > numberOfStrawberries;

if(moreFruit == true) {
    numberOfApples = numberOfApples - 10;
} 
else {
    numberOfApples = numberOfApples + 10;
}

console.log(numberOfApples);

moreFruit = numberOfApples > numberOfStrawberries;

var manGivesPears = true;

console.log("You have " + numberOfPears + " pears. A man approaches and may or may not give you more pears depending on your actions.");

if(manGivesPears == true) {
    numberOfPears = numberOfPears + 3;
} 
else {
    console.log("The man gives you no pears and leaves forever.");
}

console.log("The man gives you 3 pears, meaning you now have " + numberOfPears + " pears.");

if(numberOfPears == 6) {
    console.log("You have 6 pears");
}
else if(numberOfPears >=6) {
    console.log("You have more than 6 pears");
}
else if(numberOfPears <6) {
    console.log("You have less than 6 pears.");
}
else {
    console.log("error oh no");
}

numberOfPears = numberOfPears - 2;

console.log("Someone took a couple of your pairs, you only have " + numberOfPears + " left!");

console.log("This means...");

if(numberOfPears == 6) {
    console.log("You have 6 pears");
}
else if(numberOfPears >=6) {
    console.log("You have more than 6 pears");
}
else if(numberOfPears <6) {
    console.log("You have less than 6 pears");
}
else {
    console.log("error oh no");
}

console.log("Alert! New weird law has come into effect, by order of the King! It is now illegal to have more than 10 pears at any given time. BUT, it is also illegal to have less than 3 pears too. So weird!");

var minValue = 3;

var maxValue = 10;

if(numberOfPears >= minValue && numberOfPears <= maxValue) {
    console.log("You do not have too many or too few pears, you are safe! PHEW!");
}
else {
    console.log("RUN! You have an illegal number of pears as decreed by the King. Escape the country!");
}

numberOfPears = numberOfPears + 10;

console.log("You find a box full of pears, 10 of them in fact. Yum!");

if(numberOfPears >= minValue && numberOfPears <= maxValue) {
    console.log("You do not have too many or too few pears, you are safe! PHEW!");
}
else {
    console.log("RUN! You have an illegal number of pears as decreed by the King. Escape the country!");
}

console.log("You received a Bulbasaur as a starter Pokemon, you also catch a Pidgey on Route 1 and a Caterpie in Viridian Forest. Nice!");

console.log("Brock is coming up pretty soon, you'll need something that can deal with Rock types, a Grass type Pokemon would do...");

var bulbasaurGrass = true;

var PidgeyGrass = false;

var CaterpieGrass = false;

if(bulbasaurGrass || PidgeyGrass || CaterpieGrass) {
    console.log("Oh hey, you have a Grass type Pokemon. Nice, Brock is going down!");
}
else {
    console.log("Yikes, you don't have a Grass type, maybe you should go searching for one before taking on Brock.");
}

console.log("Your Bulbasaur has gone on holiday to Sinnoh. Hope he has a nice time! You still have Brock to deal with unfortunately, and looking at your current options...");

if(PidgeyGrass || CaterpieGrass) {
    console.log("Oh hey, you have a Grass type Pokemon. Nice, Brock is going down!");
}
else {
    console.log("Yikes, you don't have a Grass type, maybe you should go searching for one before taking on Brock.");
}

console.log("You see a Pokemon in the tall grass, better go see what it is!");

var pokemon = "Bulbasaur";

switch(pokemon) {
    case "Pikachu":
        console.log(pokemon + " is pretty cool, but an electric type isn't going to help much with Brock");
    break;

    case "Mankey":
        console.log("It looks like a " + pokemon + ". It's not really ideal but a Fighting type should help against Brock.");
    break;

    case "Weedle":
    case "Caterpie":
    case "Metapod":
    case "Kakuna":
        console.log("Oh... it's just a " + pokemon + ". Bug types will be useless against Brock's Onix.");
    break;

    case "Bulbasaur":
        console.log("Oh hey! It's your " + pokemon + ". He must be back from Sinnoh, and just in time to help you smash Brock too!");
    break;

    default:
        console.log("You don't recognise this Pokemon, time to pull out the Pokedex and see what it is!");
    break;
}

let season = "spring";

console.log(season);
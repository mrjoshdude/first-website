// for loop
// i is the variable, self contained within the loop. It starts at 10, and will continue to run as long as it is larger than 0, it running reduces the number by 1
console.log("Countdown using FOR loop:");
for(let i = 10; i > 0; i--) {
    console.log(i);
}

// while loop
// a loop you want to continue until a condition has been met
console.log("Countdown using WHILE loop:");
let count = 10;
while(count > 0) {
    console.log(count);
    count--;
}

console.log("liftoff dude");

// do while loop
// a do while will always run at least once because it runs first before it checks the condition
console.log("Countdown using DO WHILE loop:");
let num = 10;
do {
    console.log(num);
    num--;
}
while (num > 0);
console.log("liftoff dude");

// factors greater than 1 for a given number
const number = prompt("Enter a number, loser:");
for(let i = 2; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}

// higher or lower guessing game
// generate a random number between 1 and 13
// allow for 3 attempts for the user to input a guess
// check if guess is correct or not and provide feedback (e.g. too high/too low)
// after 3 attempts, reveal the answer if not guessed correctly

let randomNumber = Math.floor(Math.random() * 13) + 1;
//console.log(randomNumber);

let numberOfTries = 3;

do {
    let userNumber = parseInt(prompt("Guess a number between 1 and 13"));

    if (randomNumber == userNumber) {
        let winnerAlert = alert(`You are correct! (${userNumber}) is the answer!`);
        break;
    }
    else if (randomNumber < userNumber) {
        let higherAlert = alert(`Your number (${userNumber}) is too high!`);
    }
    else if (randomNumber > userNumber) {
        let lowerAlert = alert(`Your number (${userNumber}) is too low!`);
    }

    numberOfTries--;
}

while(numberOfTries > 0);

if (numberOfTries == 0) {
    let lossAlert = alert(`Sorry! You've lost. The correct number was ${randomNumber}!`);
}

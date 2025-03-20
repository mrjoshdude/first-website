alert("You are challenged to a game of Rock, Paper, Scissors, Lizard, Spock!")
alert("Can you defeat the computer?")
let yourPick = prompt("Rock, Paper, Scissors, Lizard, or Spock? Make your choice!");

let compPick = Math.floor(Math.random() * 5) + 1;
console.log(compPick)

if (compPick == 1) {
    compPick = "Rock";
}
else if (compPick == 2) {
    compPick = "Scissors";
}
else if (compPick == 3) {
    compPick = "Paper";
}
else if (compPick == 4) {
    compPick = "Lizard";
}
else if (compPick == 5) {
    compPick = "Spock";
}

if (compPick == yourPick) {
    alert(`DRAW! The computer also picked ${yourPick}! Play again?`);
}
else if (compPick == "Rock" && yourPick == "Paper") {
    alert("You Win! The computer picked Rock! Play again?");
}
else if (compPick == "Rock" && yourPick == "Scissors") {
    alert("You lose! The computer picked Rock! Play again?");
}
else if (compPick == "Rock" && yourPick == "Lizard") {
    alert("You lose! The computer picked Rock! Play again?");
}
else if (compPick == "Rock" && yourPick == "Spock") {
    alert("You Win! The computer picked Rock! Play again?");
}
else if (compPick == "Paper" && yourPick == "Rock") {
    alert("You Lose! The computer picked Paper! Play again?");
}
else if (compPick == "Paper" && yourPick == "Scissors") {
    alert("You Win! The computer picked Paper! Play again?");
}
else if (compPick == "Paper" && yourPick == "Lizard") {
    alert("You Win! The computer picked Paper! Play again?");
}
else if (compPick == "Paper" && yourPick == "Spock") {
    alert("You lose! The computer picked Paper! Play again?");
}
else if (compPick == "Scissors" && yourPick == "Rock") {
    alert("You Win! The computer picked Scissors! Play again?");
}
else if (compPick == "Scissors" && yourPick == "Paper") {
    alert("You Lose! The computer picked Scissors! Play again?");
}
else if (compPick == "Scissors" && yourPick == "Lizard") {
    alert("You lose! The computer picked Scissors! Play again?");
}
else if (compPick == "Scissors" && yourPick == "Spock") {
    alert("You Win! The computer picked Scissors! Play again?");
}
else if (compPick == "Lizard" && yourPick == "Rock") {
    alert("You Win! The computer picked Lizard! Play again?");
}
else if (compPick == "Lizard" && yourPick == "Paper") {
    alert("You Lose! The computer picked Lizard! Play again?");
}
else if (compPick == "Lizard" && yourPick == "Scissors") {
    alert("You Win! The computer picked Lizard! Play again?");
}
else if (compPick == "Lizard" && yourPick == "Spock") {
    alert("You Lose! The computer picked Lizard! Play again?");
}
else if (compPick == "Spock" && yourPick == "Rock") {
    alert("You lose! The computer picked Spock! Play again?");
}
else if (compPick == "Spock" && yourPick == "Paper") {
    alert("You Win! The computer picked Spock! Play again?");
}
else if (compPick == "Spock" && yourPick == "Scissors") {
    alert("You Lose! The computer picked Spock! Play again?");
}
else if (compPick == "Spock" && yourPick == "Lizard") {
    alert("You Win! The computer picked Spock! Play again?");
}
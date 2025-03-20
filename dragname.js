let fullName = prompt("What is your full name?");
let dob = prompt("And your date of birth? In DD/MM/YYYY format please.");

let dobSplit = dob.split('/');
let dobMonth = dobSplit[1];

let nameSplit = fullName.split(" ");
let firstName = nameSplit[0];
let secondName = nameSplit[1];

let firstSplit = firstName.split("");
let firstInitial = firstSplit[0];

let secondSplit = secondName.split("");
let secondInitial = secondSplit[0];

console.log(firstInitial);
console.log(secondInitial);

if (dobMonth == "01" || dobMonth == "07") {
    drag1 = "Miss";
}
else if (dobMonth == "02" || dobMonth == "08") {
    drag1 = "Mrs";
}
else if (dobMonth == "03" || dobMonth == "09") {
    drag1 = "Lady";
}
else if (dobMonth == "04" || dobMonth == "10") {
    drag1 = "Dame";
}
else if (dobMonth == "05" || dobMonth == "11") {
    drag1 = "Madame";
}
else if (dobMonth == "06" || dobMonth == "12") {
    drag1 = "";
}

switch(firstInitial) {
    case "A":
        drag2 = "Peaches";
    break;
    case "B":
        drag2 = "Backroll";
    break;
    case "C":
        drag2 = "Orgazma";
    break;
    case "D":
        drag2 = "Sequence";
    break;
    case "E":
        drag2 = "Felicia";
    break;
    case "F":
        drag2 = "Kiki";
    break;
    case "G":
        drag2 = "";
    break;
    case "H":
        drag2 = "Summer";
    break;
    case "I":
        drag2 = "Iona";
    break;
    case "J":
        drag2 = "Ornacia";
    break;
    case "K":
        drag2 = "Ivana";
    break;
    case "L":
        drag2 = "Charity";
    break;
    case "M":
        drag2 = "Ophelia";
    break;
    case "N":
        drag2 = "Toxic";
    break;
    case "O":
        drag2 = "";
    break;
    case "P":
        drag2 = "Ida";
    break;
    case "Q":
        drag2 = "Regina";
    break;
    case "R":
        drag2 = "Alotta";
    break;
    case "S":
        drag2 = "Mimi";
    break;
    case "T":
        drag2 = "Frieda";
    break;
    case "U":
        drag2 = "";
    break;
    case "V":
        drag2 = "Tyra";
    break;
    case "W":
        drag2 = "Bon Qui Qui";
    break;
    case "X":
        drag2 = "Coco";
    break;
    case "Y":
        drag2 = "Amanda";
    break;
    case "Z":
        drag2 = "Zizi";
    break;
}

switch(secondInitial) {
    case "A":
        drag3 = "Rivers";
    break;
    case "B":
        drag3 = "Lake";
    break;
    case "C":
        drag3 = "Surprise";
    break;
    case "D":
        drag3 = "Eleganza";
    break;
    case "E":
        drag3 = "Goodnight";
    break;
    case "F":
        drag3 = "Kayne";
    break;
    case "G":
        drag3 = "Beaverhousen";
    break;
    case "H":
        drag3 = "Balls";
    break;
    case "I":
        drag3 = "Summers";
    break;
    case "J":
        drag3 = "Vision";
    break;
    case "K":
        drag3 = "Heaux";
    break;
    case "L":
        drag3 = "Cutabitch";
    break;
    case "M":
        drag3 = "Filth";
    break;
    case "N":
        drag3 = "Tucker";
    break;
    case "O":
        drag3 = "K.Mart";
    break;
    case "P":
        drag3 = "Wylde";
    break;
    case "Q":
        drag3 = "Latifah";
    break;
    case "R":
        drag3 = "O'Plenty";
    break;
    case "S":
        drag3 = "Bang Bang";
    break;
    case "T":
        drag3 = "Foxxx";
    break;
    case "U":
        drag3 = "Caliente";
    break;
    case "V":
        drag3 = "Alert";
    break;
    case "W":
        drag3 = "D-Lite";
    break;
    case "X":
        drag3 = "Bush";
    break;
    case "Y":
        drag3 = "Anaconda";
    break;
    case "Z":
        drag3 = "Diamond";
    break;
}

console.log(`Your drag name is ${drag1} ${drag2} ${drag3}.`)
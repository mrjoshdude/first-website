// define scoring function

function checkAnswers() {

    // set the score to 0

    let score = 0
    let result = 0
    let gryff = 0
    let huff = 0
    let raven = 0
    let slyth = 0

    // assign the quiz elements to the quiz variable

    let quiz = document.forms.quiz.elements;

    // assign the score for question 1 to the answer1 variable

    let answer1 = quiz.colour.value;

    // assign the score value

    if (answer1 === "red") {
        gryff = gryff + 1;
    }
    else if (answer1 === "yellow") {
        huff = huff + 1;
    }
    else if (answer1 === "blue") {
        raven = raven + 1;
    }
    else {
        slyth = slyth + 1;
    }

    let answer2 = quiz.animal.value;

    if (answer2 === "lion") {
        gryff = gryff + 1;
    }
    else if (answer2 === "badger") {
        huff = huff + 1;
    }
    else if (answer2 === "raven") {
        raven = raven + 1;
    }
    else {
        slyth = slyth + 1;
    }

    let answer3 = quiz.test.value;

    if (answer3 === "try") {
        gryff = gryff + 1;
    }
    else if (answer3 === "friend") {
        huff = huff + 1;
    }
    else if (answer3 === "study") {
        raven = raven + 1;
    }
    else {
        slyth = slyth + 1;
    }

    let answer4 = quiz.hobby.value;

    if (answer4 === "quidditch") {
        gryff = gryff + 1;
    }
    else if (answer4 === "flowers") {
        huff = huff + 1;
    }
    else if (answer4 === "read") {
        raven = raven + 1;
    }
    else {
        slyth = slyth + 1;
    }

    // determine result from score

    if (gryff > huff && gryff > raven && gryff > slyth) {
        result = "Gryffindor";
    }
    else if (huff > gryff && huff > raven && huff > slyth) {
        result = "Hufflepuff";
    }
    else if (raven > gryff && raven > huff && raven > slyth) {
        result = "Ravenclaw";
    }
    else if (slyth > gryff && slyth > huff && slyth > raven) {
        result = "Slytherin";
    }
    else {
        result = prompt("You're too difficult to sort, just type the first letter of the house you want to be in")
        if (result == "g" || result == "G") {
            result = "Gryffindor";
        }
        if (result == "h" || result == "H") {
            result = "Hufflepuff";
        }
        if (result == "r" || result == "R") {
            result = "Ravenclaw";
        }
        if (result == "s" || result == "S") {
            result = "Slytherin";
        }
    }

    // display the result as an alert

    alert(`Congratulations! You are a member of ${result} house!`);
}
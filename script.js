function finishFunction() {
    alert("Congratulations, you finished the quiz!");
}

function checkAnswers() {
    let score = 0;
    quiz = document.forms.Quiz.elements;
    answer1 = quiz.bear.value;
    if (answer1 == "black") {
        score++;
    }
    answer2 = quiz.beets.value;
    if (answer2 == "battlestar") {
        score++;
    }
    answer3 = quiz.ducks.value;
    if (answer3 == 20) {
        score++;
    }
    alert(`Well done! Your score was ${score}`);
}

    const image = document.getElementById("quizgnome");
    const audio = document.getElementById("gnomewoo");

    image.addEventListener("click", function () {
        audio.play();
    });
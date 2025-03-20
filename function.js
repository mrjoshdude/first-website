function createRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
    console.log(randomNumber)
}

createRandomNumber(69, 100);

function dobAge() {
    let dob = prompt("What is your Date of Birth, please give in YYYY/MM/DD format.");
    let dobDate = new Date(dob);
    console.log(dobDate);

    let d = new Date();

    let ageYears = d.getFullYear() - dobDate.getFullYear();
    if (d.getMonth() < dobDate.getMonth() || (d.getMonth == dobDate.getMonth && d.getDate() < dobDate.getDate())) {
        ageYears--;
    }
    console.log(`You are ${ageYears} years old`);
}

dobAge();
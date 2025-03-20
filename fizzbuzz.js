// create a function that counts from 0 to 100 and prints each number to the console, EXCEPT, if the number is divisible by 3, return "Fizz" if the number is divisible by 5, return "Buzz", and if the number is divisible by both 3 and 5, return "Fizzbuzz"

function fizzbuzz(num) {for(let i = 0; i < num; i++) {
    if (i == 0) {
        console.log(i)
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizzbuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
}

fizzbuzz(101);

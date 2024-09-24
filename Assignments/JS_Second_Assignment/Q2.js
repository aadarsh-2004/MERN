function checkNumber(number) {
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

let number1 = 10;
checkNumber(number1);
let number2 = -1;
checkNumber(number2);
let number3 = 0;
checkNumber(number3);

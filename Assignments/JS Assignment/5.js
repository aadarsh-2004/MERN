// Question 5: Arrays
// Task: Write a JavaScript program that creates an array of 5 numbers, calculates the sum of all the numbers in the array,
// and prints the result.


// Create an array of 5 numbers
let numbers = [10, 20, 30, 40, 50];

// Calculate the sum of the numbers in the array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Print the result
console.log(`The sum of the numbers is: ${sum}`);   
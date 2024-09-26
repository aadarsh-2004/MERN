// Use the `slice()` method to create a new array from a portion of an existing array.

// Initial array
let fruits = ['apple', 'banana', 'orange', 'grape', 'mango', 'pineapple'];

// Create a new array containing the second and third elements
let newFruits1 = fruits.slice(1, 3);
console.log(newFruits1); // Output: ['banana', 'orange']

// Create a new array containing all elements from the second index to the end
let newFruits2 = fruits.slice(1);
console.log(newFruits2); // Output: ['banana', 'orange', 'grape', 'mango', 'pineapple']

// Create a new array containing the last two elements
let newFruits3 = fruits.slice(-2);
console.log(newFruits3); // Output: ['mango', 'pineapple']

// Create a new array containing the first three elements
let newFruits4 = fruits.slice(0, 3);
console.log(newFruits4); // Output: ['apple', 'banana', 'orange']
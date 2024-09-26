// Modify an array by removing and/or adding elements using the `splice()` method.


// Initial array
let fruits = ['apple', 'banana', 'orange', 'grape'];

// Remove the second and third elements
fruits.splice(1, 2);
console.log(fruits); // Output: ['apple', 'grape']

// Add some new elements to the array
fruits.splice(1, 0, 'banana', 'orange', 'mango');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'mango', 'grape']

// Remove and add elements in a single operation
fruits.splice(1, 2, 'pineapple', 'watermelon');
console.log(fruits); // Output: ['apple', 'pineapple', 'watermelon', 'mango', 'grape']
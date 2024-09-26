// If-Else Statements
// Task: Write a JavaScript program that checks if a number is positive, negative, or zero. Print 'Positive', 'Negative', or
// 'Zero' accordingly.

// Function to classify a number
function classifyNumber(num) {
    if (num > 0) {
      return 'Positive';
    } else if (num < 0) {
      return 'Negative';
    } else {
      return 'Zero';
    }
  }
  
  // Get user input for a number
  const num = parseFloat(prompt("Enter a number: "));
  
  // Classify the number
  const classification = classifyNumber(num);
  
  // Print the classification
  console.log(`The number ${num} is ${classification}.`);
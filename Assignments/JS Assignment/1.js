// Question 1: String Concatenation
// Task: Write a JavaScript program that takes a first name and a last name as input, concatenates them to form a full
// name, and then prints the full name.


// Function to generate full name
function generateFullName(firstName, lastName) {
    // Concatenate first name and last name with a space in between using concat
    const fullName = firstName.concat(" ", lastName);
    return fullName;
  }
  
  // Get user input for first name and last name
  const firstName = prompt("Enter your first name: ");
  const lastName = prompt("Enter your last name: ");
  
  // Generate full name
  const fullName = generateFullName(firstName, lastName);
  
  // Print full name
  console.log(`Your full name is: ${fullName}`);
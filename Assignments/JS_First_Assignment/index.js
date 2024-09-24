function sayHello() {
    return "Hello, World!";
  }
  
  const doubleNumber = (num) => num * 2;
  
  function addTwoNumbers(num1, num2) {
    return num1 + num2;
  }
  
  function subtractTen(num) {
    return num - 10;
  }
  
  function isGreaterThanFive(num) {
    return num > 5;
  }
  
  function isBetweenOneAndTen(num) {
    return num >= 1 && num <= 10;
  }
  
  function isEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
  }
  
  function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
  }
  
  function getDayType(day) {
    switch (day) {
      case 6:
      case 7:
        return "Weekend";
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return "Weekday";
      default:
        return "Invalid day";
    }
  }

  console.log(sayHello());
  console.log(doubleNumber(5));
  console.log(addTwoNumbers(3, 4));
  console.log(subtractTen(20));
  console.log(isGreaterThanFive(6));
  console.log(isBetweenOneAndTen(5));
  console.log(isEven(4));
  console.log(isEven(3));
  console.log(checkAge(20));
  console.log(checkAge(16));
  console.log(getDayType(6));
  console.log(getDayType(3));
  console.log(getDayType(8));
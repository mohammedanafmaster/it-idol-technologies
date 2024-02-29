// Take string as an input from the user
let string = prompt("Enter a string: ");

//* Logic Building: string is an array of characters and array has a reverse() method. Split the string so it becomes an array of characters, reverse it, and join it back using join() method

// Strings are immutable so split the string and store it inside a 'splitString' variable
let splitString = string.split(" "); // 

// Reverse 'newString' and store it inside another variable
let reverseString = splitString.reverse();

// Join the string back using join() method
let joinString = reverseString.join(" ");

// Print the output to the console
console.log(joinString);
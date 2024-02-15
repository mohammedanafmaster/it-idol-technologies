// Take string as an input from the user
let string = prompt("Enter a string: ");

// Reverse a string
let splitString = string.split("");
let reverseString = splitString.reverse();
let joinString = reverseString.join("");

console.log(joinString);
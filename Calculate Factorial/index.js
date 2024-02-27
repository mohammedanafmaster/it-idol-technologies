// Take number as an input from the user
let number = prompt("Enter a number: ");

// Initialize 'factorial' to 1 so it does not return 'Nan'
let factorial = 1;

// Calculate factorial by multiplying the numbers from 1 to that specified number
for (let i=1 ; i<=number ; i++) {
    factorial *= i; // factorial = factorial * i
}

// Print the output to the console
console.log(factorial)
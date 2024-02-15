// Declare variable and take input from the user
let input = prompt("Enter a number: ");

// By default, assign true to the declared variable
let isPrime = true;

// Check if the input is divisible by any number apart from 1 and itself or not using for loop
for (let i=2 ; i<input ; i++) {
    if(input % i == 0) {
        isPrime = false;
    }
}

// Print the output
let result = isPrime == false ? console.log("It is not a prime number.") : console.log("It is a prime number.");
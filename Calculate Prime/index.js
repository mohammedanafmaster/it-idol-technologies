// Take number as an input from the user
let number = prompt("Enter a number: ");

// Set the default value to 'true'
isPrime = true;

// Check if the number is getting divided by values other than 1 and the number itself
for (let i=2 ; i<number ; i++) {

    // If it gets divided, it will return 0 as the remainder. In this case; change the default value to 'false' (indicating, it is not a prime number)
    if (number%i==0)
        isPrime = false;
}

// Print this if the number is prime
if (isPrime) {
    console.log("It is a prime number.")
}

// Print this if the number is not prime
else {
    console.log("It is not a prime number.")
}
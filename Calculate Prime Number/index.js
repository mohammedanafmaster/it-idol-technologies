// Take number as an input from the user
let number = prompt("Enter a number: ");
let isPrime=true;

// Check if the number is prime or not [If it gets divided by any number other than 1 or itself, it is not a prime number]
for (let i=2 ; i<number ; i++) {
    if (number%i==0)
        isPrime = false;
}

// Print to the console if it is a prime number
if(isPrime) {
    console.log("It is a prime number.")
}

// Print to the console if it is not a prime number
else {
    console.log("It is not a prime number.")
}
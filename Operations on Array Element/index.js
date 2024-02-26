// Create an array and take items as input from the user
let array = [], number = prompt("Enter a number: ");

// Insert elements at the end from 1 to value entered by the user
for (let i=1 ; i<=number ; i++) {
    array.push(i);
}

// Multiply all the array elements using reduce() method
let multiplication = (item1, item2) => {
    return item1 * item2;
}

console.log(array.reduce(multiplication));

// Subtract all the array elements using reduce() method
let subtraction = (item1, item2) => {
    return item1 - item2;
}

console.log(array.reduce(subtraction));

// Add all the array elements without using reduce() method
let addition = 0;

for (i=1 ; i<=array.length ; i++) {
    addition += i;
}

console.log(addition);

// Average of all the array elements (use addition variable)
let average = addition/array.length;

console.log(average);
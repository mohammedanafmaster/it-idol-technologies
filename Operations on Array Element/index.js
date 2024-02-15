// Create an empty array
let array = [];

// Take input from the user
let input = prompt("Enter a number: ");

// Generate array elements based on the input
for(let i=1 ; i <= input ; i++) {
    array.push(i);
}

// Add all the array elements [without using array.reduce]
let add = 0;

for(i=1 ; i<=array.length ; i++) {
    add += i;
}

console.log(add);

// Subtract all the array elements
const subtract = (value1, value2) => {
    return value1 - value2;
}

console.log(array.reduce(subtract));

// Multiply all the array elements
const multiply = (value1, value2) => {
    return value1 * value2;
}

console.log(array.reduce(multiply));

// Average of all the array elements
let average = add / array.length;

console.log(average);
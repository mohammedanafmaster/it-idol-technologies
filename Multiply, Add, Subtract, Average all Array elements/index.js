// Create an empty array and take number as an input from the user
let array=[];
let number = prompt("Enter a number: ");

// Add items into the empty array from 1 to the number entered by the user
for (let i=1 ; i<=number ; i++) {
    array.push(i);
}

// Multiply all the array elements without using reduce() method
let multiply = 1;

for (i=1 ; i<=array.length ; i++) {
    multiply *= i;  // multiply = multiply * i
}

// Print the output to the console
console.log(multiply)


// Add all the array elements using reduce() method
let addArray = (item1, item2) => {
    return item1+item2;
}

// Print the output to the console
console.log(array.reduce(addArray))


// Subtract all the array elements using reduce() method
let subtractArray = (item1, item2) => {
    return item1 - item2;
}

// Print the output to the console
console.log(array.reduce(subtractArray))


// Average of all the array elements
let average = array.reduce(addArray)/array.length;

// Print the output to the console
console.log(average)
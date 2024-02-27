/*********************************** Count negative numbers ***********************************/

// Create an empty array and take input from the user
let array = [];
let number = prompt("Enter a number: ");

// Generate a range of integers based on the user input
for (let i=-number ; i<=number ; i++) {
    array.push(i);
}

// Count negative numbers in the array and store them in a new array
let count = 0;
let negativeArray = [];

array.forEach(element => {
    if (element < 0) {
        count++;
        negativeArray.push(element);
    }
});

// Print the output to the console
console.log(`The count of negative numbers is: ${count} and the array is: ${negativeArray}`);


/*********************************** Count odd and even strings ***********************************/

// Create an array with random string values and initialize the variables
let array1 = ['Apple', 'Banana', 'Cuckoo', 'Duck', 'Ear', 'Face'];
let evenCount = 0, oddCount = 0;
let evenArray = [], oddArray = [];

// Check if the string is divisible by 2 or not. If it is, string is even; else, it is odd
array1.forEach(element => {
    if (element.length % 2 == 0) {
        evenCount++;
        evenArray.push(element);
    }
    else {
        oddCount++;
        oddArray.push(element);
    }
});

// Print the output to the console
console.log(`The count of odd strings are: ${oddCount} and the array is: ${oddArray}`)
console.log(`The count of even strings are: ${evenCount} and the array is: ${evenArray}`)


/*********************************** Sort the array alphabetically ***********************************/

// Create an array with unsorted string values
let array2 = ['Duck', 'Apple', 'Face', 'Ear', 'Cuckoo', 'Banana']

// Sort the array using sort() method and print the output to the console
console.log(array2.sort())


/*********************************** Longest string of an array ***********************************/

// Create an array and insert elements of random length
let array3 = ["apple", "banana", "orange", "strawberry", "kiwi", "blueberry"]

// Check if the length of item1 is more or item2, return the item with more length
let longestString = (item1, item2) => {
    return item1.length > item2.length ? item1 : item2;
}

// Print the output to the console
console.log(array3.reduce(longestString))
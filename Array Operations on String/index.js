// Count negative numbers from an array
let numberedArray = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
let count=0, negativeArray = [];

for (const number of numberedArray) {
    if (number<0) {
        negativeArray.push(number);
        count++;
    }
}

console.log("The count of negative numbers is: " + count + " and the negative numbers are: " + negativeArray);

// Count even and odd strings of an array
let stringArray = ["apple", "banana", "orange", "kiwi", "grape", "cherry", "pear", "melon", "fig", "plum", "peach", "berry", "hello", "baka"];
let evenCount=0, oddCount=0;
let evenString=[], oddString=[];

for (const string of stringArray) {
    if(string.length % 2 === 0) {
        evenString.push(string);
        evenCount++;
    }
    
    else {
        oddString.push(string);
        oddCount++;
    }
}

console.log("The number of even strings are: " + evenCount + " and their value is: " + evenString.join(", "));
console.log("The number of odd strings are: " + oddCount + " and their value is: " + oddString.join(", "));

// Sort the array alphabetically
let unsortedArray = ["banana", "apple", "grape", "orange", "kiwi", "pear", "pineapple"]

console.log("The sorted version of array is: " + unsortedArray.sort());

// Find the longest string from an array
let longestArray = ["Hi", "Hey", "Byte", "World", "Bonjour", "Elephant", "Dinosaur", "Hippopotamus"];

const longestString = (value1, value2) => {
    return value1.length > value2.length ? value1 : value2;
}

console.log(longestArray.reduce(longestString));
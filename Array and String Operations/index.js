// Create an array consisting of 7 strings
let array=["Hello", "World", "Hi", "There", "Gen Z", "Booze", "Snooze"];

// Remove first character from each element
const removeFirstCharacter = array.map((string) => {
    return string.slice(1);
})

console.log(removeFirstCharacter);

// Remove last character from each element
const removeLastCharacter = array.map((string) => {
    return string.slice(0, -1);
})

console.log(removeLastCharacter);

// Find the alphabet 'z'
const findZ = array.filter((string) => {
    return string.includes('z');
})

console.log(findZ);
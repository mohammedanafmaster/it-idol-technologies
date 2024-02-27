// Create an array consisting of 5 strings
let array = ['Banzo', 'Apple', 'Lion', 'Zebra', 'Godzilla']

// Remove the first character from all the array elements
let removeFirstCharacter = array.map((element) => {
    return element.slice(1)
})

console.log(removeFirstCharacter)


// Remove the last character from all the array elements
let removeLastCharacter = array.map((element) => {
    return element.slice(0, -1)
})

console.log(removeLastCharacter)


// Find which string contains alphabet 'z'
let findZ = (element) => {
    return element.includes('z')
}

console.log(array.filter(findZ))
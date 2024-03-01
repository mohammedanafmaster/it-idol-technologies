let button = document.getElementById('button');
let input = document.getElementsByClassName('input')
let displayPop = document.getElementsByClassName('display');

let stringFunction = () => {
    Array.from(input).forEach((input, index) => {
        let inputValue = input.value;
        let splitString = inputValue.split("");

        const specialCharacters = (character) => {
            return character.charCodeAt(0) >= 32 && character.charCodeAt(0) <= 47;
        }
        Array.from(displayPop)[index].innerText = splitString.filter(specialCharacters);
    })
}

button.addEventListener('click', stringFunction);
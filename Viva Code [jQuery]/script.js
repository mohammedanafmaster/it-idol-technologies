let button = $('#button');
let input = $('.input')
let displayPop = $('.display');

let stringFunction = () => {
    input.each((index, inputElement) => {
        let inputValue = $(inputElement).val();
        let splitString = inputValue.split("");

        const specialCharacters = (character) => {
            return character.charCodeAt(0) >= 32 && character.charCodeAt(0) <= 47;
        }
        $(displayPop[index]).text(splitString.filter(specialCharacters).join(''));
    })
}

button.on('click', stringFunction);
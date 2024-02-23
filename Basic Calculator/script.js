let display = document.getElementById('display');

let digitButtons = document.querySelectorAll('.button.digits');
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.value;
    });
});

let mathButtons = document.querySelectorAll('.button.mathButtons');
let operation = null;
let previousValue = null;
mathButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value !== "=") {
            operation = button.value;
            previousValue = parseFloat(display.value);
            display.value = '';
        } else {
            switch (operation) {
                case '+':
                    display.value = previousValue + parseFloat(display.value);
                    break;
                case '-':
                    display.value = previousValue - parseFloat(display.value);
                    break;
                case 'x':
                    display.value = previousValue * parseFloat(display.value);
                    break;
                case '/':
                    display.value = previousValue / parseFloat(display.value);
                    break;
            }
            operation = null;
            previousValue = null;
        }
    });
});

let clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    display.value = '';
    operation = null;
    previousValue = null;
});
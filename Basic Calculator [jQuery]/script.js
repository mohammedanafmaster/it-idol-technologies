let display =$('#display');

let digitButtons = $('.button.digits');
digitButtons.each(button => {
    button.on('click', () => {
        display.value += button.value;
    });
});

let mathButtons = $('.button.mathButtons');
let operation = null;
let previousValue = null;
mathButtons.each(button => {
    button.on('click', () => {
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

let clearButton = $('#clearButton');
clearButton.on('click', () => {
    display.value = '';
    operation = null;
    previousValue = null;
});
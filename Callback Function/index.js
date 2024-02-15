// A callback function is a function that can be called inside another function as an argument.

const button = document.getElementById('button');

function callback() {
    alert("Hello, World!");
}

// Callback function must not have parenthesis at the time of calling
button.addEventListener('click', callback);
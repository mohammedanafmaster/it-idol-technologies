//* An event listener is also a callback function.

// Create an arrow function that can be called inside another function
let callback = () => {
    $('#paragraph').text("Good bye, World!");
}

// Add a click event listener to the button so when the user clicks on it, the paragraph text changes
$('#button').on('click', callback)
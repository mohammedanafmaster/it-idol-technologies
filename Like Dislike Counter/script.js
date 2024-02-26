// Initialize the value of likes and dislikes to 0; else it will show 'undefined' in the output
let likes = 0, dislikes = 0;

// Add a click event listener to the button with an id = increaseLikes
document.getElementById('increaseLikes').addEventListener('click', () => {

    // Increase the value of likes by 1
    likes++;

    // Display the output in an HTML element with an id = showLikes and make it's text content equal to the value of 'likes'
    document.getElementById('showLikes').innerText = likes;
})

// Add a click event listener to the button with an id = increaseDislikes
document.getElementById('increaseDislikes').addEventListener('click', () => {

    // Increase the value of dislikes by 1
    dislikes++;

    // Display the output in an HTML element with an id = showDislikes and make it's text content equal to the value of 'dislikes'
    document.getElementById('showDislikes').innerText = dislikes;
})
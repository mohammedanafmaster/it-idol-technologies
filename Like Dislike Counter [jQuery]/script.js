// Initialize '0' as default value so it does not display 'NaN' as output
let likes=0, dislikes=0;

// Add a click event listener to the 'Likes' button so the value of likes get incremented by 1 each time the user clicks on it
$('#increaseLikes').on('click', () => {
    likes++;
    $('#showLikes').text(likes);
})

// Add a click event listener to the 'Dislikes' button so the value of dislikes get incremented by 1 each time the user clicks on it
$('#increaseDislikes').on('click', () => {
    dislikes++;
    $('#showDislikes').text(dislikes);
})
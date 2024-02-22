let likes = 0, dislikes = 0;

document.getElementById('increaseLikes').addEventListener('click', () => {
    likes++;
    document.getElementById('showLikes').innerText = likes;
})

document.getElementById('increaseDislikes').addEventListener('click', () => {
    dislikes++;
    document.getElementById('showDislikes').innerText = dislikes;
})
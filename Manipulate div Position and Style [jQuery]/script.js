// Generate random value for background-color, color, top, and left
let r = Math.floor(Math.random()*255), g = Math.floor(Math.random()*255), b = Math.floor(Math.random()*255);
let r1 = Math.floor(Math.random()*255), g1 = Math.floor(Math.random()*255), b1 = Math.floor(Math.random()*255);
let x = Math.floor(Math.random()*1400), y = Math.floor(Math.random()*600);

// Modify the style based on the random values [Use jQuery chaining to reduce repetition]
$('#div').css('background-color', `rgb(${r}, ${g}, ${b})`)
         .css('color', `rgb(${r1}, ${g1}, ${b1})`)
         .css('top', `${y}px`)
         .css('left', `${x}px`);
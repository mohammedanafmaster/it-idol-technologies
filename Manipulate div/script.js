let div = document.querySelector('div');
let r = Math.floor(Math.random() * 255), g = Math.floor(Math.random() * 255), b = Math.floor(Math.random() * 255);
let y = Math.floor(Math.random() * 500), x = Math.floor(Math.random() * 1440);

div.style.backgroundColor= `rgb(${r}, ${g}, ${b})`;
div.style.top = `${y}px`;
div.style.left = `${x}px`;
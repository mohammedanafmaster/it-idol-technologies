let swapButton = document.getElementById('swapButton');
let container1 = document.getElementById('container1');
let container2 = document.getElementById('container2');

function toggleClasses() {
    if (container1.classList.contains('container1')) {
        container1.innerText = 'I am second container';
        container1.classList.toggle('container1');
        container1.classList.toggle('container2');
    }
    
    else {
        container1.innerText = 'I am first container';
        container1.classList.toggle('container2');
        container1.classList.toggle('container1');
    }
    
    
    if (container2.classList.contains('container1')) {
        container2.innerText = 'I am second container';
        container2.classList.toggle('container1');
        container2.classList.toggle('container2');
    }
    
    else {
        container2.innerText = 'I am first container';
        container2.classList.toggle('container2');
        container2.classList.toggle('container1');
    }
}

swapButton.addEventListener('click', () => {
    toggleClasses();
})
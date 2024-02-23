let checkButton = document.getElementById('check');
let response = document.getElementById('response');

let dateEquality = () => {
    let date1Value = document.getElementById('date1').value;
    let date2Value = document.getElementById('date2').value;
    if (date1Value === date2Value) {
        response.innerText = 'Dates are equal';
    } else {
        response.innerText = 'Dates are not equal';
    }
}

checkButton.addEventListener('click', dateEquality);

let dob = document.getElementById('dob');
let age = document.getElementById('age');
let currentDate = new Date();
let calculate = document.getElementById('calculate');

let calculateAge = () => {
    let dobValue = new Date(dob.value);
    let ageValue = currentDate.getFullYear() - dobValue.getFullYear();
    age.innerText = ageValue;
}

calculate.addEventListener('click', calculateAge);
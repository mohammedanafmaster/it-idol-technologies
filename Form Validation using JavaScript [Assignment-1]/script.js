const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const dob = document.getElementById('dob');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const dobValue = dob.value;
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (firstNameValue === '') {
        setError(firstName, 'First Name is required');
    }
    
    else if (firstNameValue.length > 25) {
        setError(firstName, 'First Name must not be longer than 25 characters')
    }
    
    else {
        setSuccess(firstName);
    }

    if (lastNameValue === '') {
        setError(lastName, 'Last Name is required');
    } else {
        setSuccess(lastName);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else {
        setSuccess(email);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone number is required');
    } else {
        setSuccess(phone);
    }

    if (dobValue === '') {
        setError(dob, 'Date of birth is required');
    } else {
        setSuccess(dob);
    }

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    }
    
    else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters long')
    }
    
    else {
        setSuccess(password);
    }

    if (confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
    }
    
    else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Passwords doesn't match");
    }
    
    else {
        setSuccess(confirmPassword);
    }
};
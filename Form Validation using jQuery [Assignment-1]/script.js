const form = $('#form');
const firstName = $('#firstName');
const lastName = $('#lastName');
const email = $('#email');
const phone = $('#phone');
const dob = $('#dob');
const username = $('#username');
const password = $('#password');
const confirmPassword = $('#confirmPassword');

form.on('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.text(message);
    inputControl.addClass('error');
    inputControl.removeClass('success')
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.text('');
    inputControl.addClass('success');
    inputControl.removeClass('error');
};

const validateInputs = () => {
    const firstNameValue = firstName.val().trim();
    const lastNameValue = lastName.val().trim();
    const emailValue = email.val().trim();
    const phoneValue = phone.val().trim();
    const dobValue = dob.val();
    const usernameValue = username.val().trim();
    const passwordValue = password.val().trim();
    const confirmPasswordValue = confirmPassword.val().trim();

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
    }

    else if (firstNameValue.length > 25) {
        setError(firstName, 'First Name must not be longer than 25 characters')
    }

    else {
        setSuccess(lastName);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    }
    
    else {
        setSuccess(email);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone number is required');
    }

    else if (phoneValue < 10 || phoneValue > 10) {
        setError(phone, 'Phone number must be 10 digits only');
    }
    
    else {
        setSuccess(phone);
    }

    if (dobValue === '') {
        setError(dob, 'Date of birth is required');
    }

    else if (dobValue > '01-01-2002') {
        setError(dob, 'You must be 18 years or older')
    }
    
    else {
        setSuccess(dob);
    }

    if (usernameValue === '') {
        setError(username, 'Username is required');
    }
    
    else {
        setSuccess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
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
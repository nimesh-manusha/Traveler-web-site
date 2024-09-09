const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const number_input = document.getElementById('number-input');
const password_input = document.getElementById('password-input');
const repeat_password = document.getElementById('repeat-password');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    let errors = [];


    errors = getSignupFormErrors(
        firstname_input.value,
        email_input.value,
        number_input.value,
        password_input.value,
        repeat_password.value
    );

    if (errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join(', ');
    }
});

function getSignupFormErrors(firstname, email, number, password, repeat_password) {
    let errors = [];

    if (!firstname) {
        errors.push('First name is required');
        firstname_input.parentElement.classList.add('incorrect');
    } else {
        firstname_input.parentElement.classList.remove('incorrect');
    }

    if (!email) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    } else {
        email_input.parentElement.classList.remove('incorrect');
    }

    const phoneRegex = /^\+94\d{8,9}$/;
    if (!number) {
        errors.push('Number is required');
        number_input.parentElement.classList.add('incorrect');
    } else if (!phoneRegex.test(number)) {
        errors.push('Invalid phone number. Format should be +94 followed by 8 or 9 digits');
        number_input.parentElement.classList.add('incorrect');
    } else {
        number_input.parentElement.classList.remove('incorrect');
    }

    if (!password) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');

    }else if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
      password_input.parentElement.classList.add('incorrect');

    }else {
        password_input.parentElement.classList.remove('incorrect');
    }

    if (password !== repeat_password) {
        errors.push('Passwords do not match');
    }

    return errors;

}


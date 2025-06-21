'use strict'
document.addEventListener('DOMContentLoaded', function() {

const form = document.getElementById('registration-form');

const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', function (event) { 
    event.preventDefault();

    const username = (document.getElementById('username')).value.trim();

    const email = (document.getElementById('email')).value.trim();

    const password = (document.getElementById('password')).value.trim();

    let isValid = true;

    let messages = [];

    // username validation
    if (username.length < 3) {
        isValid = false;
        messages.push('Username must be more than 3 letters.')
    };

    // Email validation
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)){
        isValid = false;
        messages.push('Enter a valid email address.')
    }

    // password validation
    if (password.length < 8) {
        isValid = false;
        messages.push('Password must be greater than 8 characters.');
    }

    //feedback display
    feedbackDiv.style.display = 'block';
    if (isValid === true) {
        feedbackDiv.textContent = "Registeration successful!";
        feedbackDiv.style.color = '#28a745';
        
    } else {
        feedbackDiv.innerHTML = (messages.join('<br>'));
        feedbackDiv.style.color = '#dc3545';
    }

})
})

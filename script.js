// Using destructuring
// const [UserName, Email, Password, ConfirmPassword] = document.querySelectorAll(`#username, #email, #password, #confirmPassword`);

const fields = document.querySelectorAll(`#username, #email, #password, #confirmPassword`);
// console.log(pk);

// Using getElementById method.
/* const username = document.getElementById(`username`);
const email = document.getElementById(`email`);
const password = document.getElementById(`password`);
const confirmPassword = document.getElementById(`confirmPassword`); */

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = `form-control error`;
    const small = formControl.querySelector(`small`);
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = `form-control success`;
}

function isValidEmail(emailId) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(emailId).toLowerCase());
}
function getName(name) {
    return name.id.charAt(0).toUpperCase() + name.id.slice(1);
}
function checkRequired(inputArr) {
    const inputs = inputArr;
    console.log(inputs);
    for(let input of inputs) {
        if(input.value.trim() === ``) {
            showError(input, `${getName(input)} is Required.`)
        } else {
            showSuccess(input);
        }
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired(fields);
    /* if (UserName.value === '') {
        showError(UserName, `Username is required.`);   
    } else {
        showSuccess(UserName);
    }

    if (email.value === '') {
        showError(email, `Email is required.`);   
    } else if (!isValidEmail(email.value)) {
        showError(email, `Email is not valid.`);
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, `Password is required.`);   
    } else {
        showSuccess(password);
    }

    if (confirmPassword.value === '') {
        showError(confirmPassword, `confirmPassword is required.`);   
    } else {
        showSuccess(confirmPassword);
    } */

}); 
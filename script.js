// Using destructuring
// const [UserName, Email, Password, ConfirmPassword] = document.querySelectorAll(`#username, #email, #password, #confirmPassword`);

/* const fields = document.querySelectorAll(`#username, #email, #password, #confirmPassword`);
console.log(fields); */
// console.log(pk);

// Using getElementById method.
const username = document.getElementById(`username`);
const email = document.getElementById(`email`);
const password = document.getElementById(`password`);
const confirmPassword = document.getElementById(`confirmPassword`);

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

function checkEmail(input) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return regEx.test(String(emailId).toLowerCase());
    if(regEx.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, `Email is not valid.`);
    }
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

function checkLength(input, min, max) {
    const length = input.value.length;
    if(length < min) {
        showError(input, `Field should have atleast ${min} Characters.`);
    } else if(length > max) {
        showError(input, `Not more than ${max} Characters.`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `Password do not match`);
    } 
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email, password, confirmPassword]);
    checkLength(username, 4, 16);
    checkLength(password, 6, 10);
    checkEmail(email);
    checkPasswordsMatch(password, confirmPassword);  
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
const email = document.querySelector('.idInput')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const label = document.querySelector('.label')
const idLabel = document.querySelector('.idLabel')
const confirmLabel = document.querySelector('.confirmLabel')
const showPasswords = document.querySelector('#show')

password.addEventListener('focusin', function() {
    label.style.marginTop = '-3.1vh';
    label.style.backgroundColor = 'rgb(133,106,184)'
    label.style.padding = '0 5px'
    label.style.marginLeft = '-5px'
    label.style.fontSize = '15px'
    label.style.borderRadius = '50%'
})

password.addEventListener('focusout', function(){
    password.value
    if(password.value == ''){
        label.style.marginTop = '0vh';
        label.style.backgroundColor = '';
        label.style.fontSize = '20px'
    }
})

confirmPassword.addEventListener('focusin', function() {
    confirmLabel.style.marginTop = '-3.1vh';
    confirmLabel.style.backgroundColor = 'rgb(114,85,165)'
    confirmLabel.style.padding = '0 5px'
    confirmLabel.style.marginLeft = '-5px'
    confirmLabel.style.fontSize = '15px'
    confirmLabel.style.borderRadius = '50%'
    confirmLabel.style.height = '20px'
})

confirmPassword.addEventListener('focusout', function(){
    confirmPassword.value
    if(confirmPassword.value == ''){
        confirmLabel.style.marginTop = '0vh';
        confirmLabel.style.backgroundColor = '';
        confirmLabel.style.fontSize = '20px'
    }
})

email.addEventListener('focusin', function() {
    idLabel.style.marginTop = '-3.1vh';
    idLabel.style.background = 'rgb(156,133,217)'
    idLabel.style.padding = '0 5px'
    idLabel.style.marginLeft = '-5px'
    idLabel.style.fontSize = '15px'
    idLabel.style.borderRadius = '50%'
})

email.addEventListener('focusout', function(){
    email.value
    if(email.value == ''){
        idLabel.style.marginTop = '0vh';
        idLabel.style.backgroundColor = '';
        idLabel.style.fontSize = '20px'
    }
})

function showPassword(){
    if(password.type !== 'password'){
        password.type = 'password'
        confirmPassword.type = 'password'
        showPasswords.innerHTML = 'Show passwords'
    } else {
        password.type = 'text'
        confirmPassword.type = 'text'
        showPasswords.innerHTML = 'Hide passwords'
    }
}
var regexMedium = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]/
var regex=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;

password.addEventListener('input', function(){
    if(password.value.match(regex)){
        password.style.borderColor = 'green'
    } else if (password.value.match(regexMedium)){
        password.style.borderColor = 'yellow'
    } else {
        password.style.borderColor = 'white'
    }
})

confirmPassword.addEventListener('input', function() {
    if(password.value === confirmPassword.value){
        confirmPassword.style.borderColor = 'green'
    } else {
        confirmPassword.style.borderColor = 'red'
    }

    if(confirmPassword.value == ''){
        confirmPassword.style.borderColor = 'white'
    }
})

function myFunc(event) {
    event.preventDefault();

    var id_email = document.getElementById('email').value
    var id_password = document.getElementById('password').value

    localStorage.add('ls_email', id_email);
    localStorage.add('ls_password', id_password);
}
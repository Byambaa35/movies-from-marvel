const p = document.querySelector('#show')
const email = document.querySelector('.idInput')
const password = document.querySelector('#password')
const label = document.querySelector('.label')
const idLabel = document.querySelector('.idLabel')

function showPassword() {
    if(password.type == 'password') {
        p.innerHTML = 'Hide password'
        password.type = 'text'
    } else {
        p.innerHTML = 'Show password'
        password.type = 'password'
    }
}

password.addEventListener('focusin', function() {
    label.style.marginTop = '-2.7vh';
    label.style.backgroundColor = 'rgb(212,35,34)'
    label.style.padding = '0 5px'
    label.style.marginLeft = '-5px'
})

password.addEventListener('focusout', function(){
    password.value
    if(password.value == ''){
        label.style.marginTop = '0vh';
        label.style.backgroundColor = '';
    }
})

email.addEventListener('focusin', function() {
    idLabel.style.marginTop = '-2.7vh';
    idLabel.style.backgroundColor = 'rgb(228,37,40)'
    idLabel.style.padding = '0 5px'
    idLabel.style.marginLeft = '-5px'
})

email.addEventListener('focusout', function(){
    email.value
    if(email.value == ''){
        idLabel.style.marginTop = '0vh';
        idLabel.style.backgroundColor = '';
    }
})

function index() {
    open('../index.html')
}

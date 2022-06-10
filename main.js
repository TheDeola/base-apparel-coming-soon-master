const email = document.getElementById('email');

// const emailValue = email.value
const form = document.getElementById('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInput();
});



function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function checkInput() {
    const emailValue = email.value;
    if (emailValue ===''){
        setError(email, 'email cannot be blank')
    } 
    
    else if(!isEmail(emailValue)) {
        setError(email, 'please provide a valid email')
    }

    else {
        setSuccess(email)
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    //ERROR CLASS
    formControl.className = 'form-control error'

    
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className='form-control success'
}
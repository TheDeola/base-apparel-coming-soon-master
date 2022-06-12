const form = document.getElementById("form");
const email = document.getElementById("email");
// const emailValue = email.value;

// const error = document.querySelector("error");
// const error_icon = document.querySelector(".error_icon");
// // const emailValue = document.getElementById("emailvalue").value;

// function setError(input, message){
//     const img = document.querySelector("error-icon");
//     input = email;
//     // const formControl = document.getElementById("emailvalue");
//     const errorMessage = document.getElementById("errormessage").innerText;
//     errorMessage = message;
//     input.classList.add("error-border");
//     img.classList.remove("hide");
//     errorMessage.classList.remove("hide");
// };
// function setSuccess(success);

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

form.addEventListener("submit",(e) =>{
    e.preventDefault();

    checkInput() 
});

function checkInput() {
    const emailValue = email.value;
    if (emailValue === " ") {
        setError(email, "email can not be blank");
    }
    if (!isEmail(email)) {
        setError(email, "email is not valid");
    }
    else {
        setSuccess(email);
    }

    // if (validateEmail(emailValue)){
    //     // console.log("Email is valid");
    //     error.classList.add('hide');
    //     error_icon.classList.add("hide");
    // }
    // else {
    //     // console.log("Email is invalid");
    //     error.classList.remove("hide");
    //     error_icon.classList.remove("hide");
    // }
}
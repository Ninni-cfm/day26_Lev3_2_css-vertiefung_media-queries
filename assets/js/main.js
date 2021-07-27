function signUp() {
    // get the entered email address
    let emailAdress = document.getElementById("email").value;

    // check if the entered email address is valid
    if (!validateEmailAddress(emailAdress)) {
        alert("Please provide a valid email address!");
        return;
    }

    alert("You have signed up with " + emailAdress + "!");

    // all done, reset input text for email address
    email.value = "";
}




// Function to validate email addresses using regex
function validateEmailAddress(emailAddress) {

    // regex email validation pattern
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // validate a email address using regex
    return REGEX_EMAIL.test(emailAddress);
}


function submitForm() {
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    var correctUsername = "player" ;
    var correctPassword = "start";

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        window.location.href = "wordle.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}

function instruction(){
    window.location.href = "instruction.html";
}

function loginform(){
    window.location.href = "index.html";
}
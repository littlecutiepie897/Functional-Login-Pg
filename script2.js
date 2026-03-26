var emails  = ["shahmeerkong@gmail.com", "azan@gmail.com"];
var phones  = ["123456789", "6767676767"];
function showMessage(msg, color) {
    var msgBox = document.getElementById("msgBox");
    msgBox.textContent = msg;
    msgBox.style.color = color;
    msgBox.style.display = "block";
}
function resetPassword() {
    var input = document.getElementById("account").value;

    if (input == "") {
        showMessage("Please enter your email or phone number.", "red");
        return;
    }

    var found = false;

    for (var i = 0; i < emails.length; i++) {
        if (input == emails[i] || input == phones[i]) {
            found = true;
            showMessage("Verification email sent to your address.", "green");
        }
    }

    if (found == false) {
        showMessage("No account found with that email or phone.", "red");
    }
}

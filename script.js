var users     = ["shahmeerkong@gmail.com", "azan@gmail.com"];
var passwords = ["kingkong", "azan123"];
function showMessage(msg, color) {
    var msgBox = document.getElementById("msgBox");
    msgBox.textContent = msg;
    msgBox.style.color = color;
    msgBox.style.display = "block";
}
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "") {
        showMessage("Please enter your username or email.", "red");
        return;
    }

    if (password == "") {
        showMessage("Please enter your password.", "red");
        return;
    }

    var found = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i] == username && passwords[i] == password) {
            found = true;
            showMessage("Login successful! Redirecting...", "green");
            window.location.replace("dashboard.html");
        }
    }

    if (found == false) {
        showMessage("Invalid username or password.", "red");
    }
}
function logout() {
    window.location.replace("index.html");
}
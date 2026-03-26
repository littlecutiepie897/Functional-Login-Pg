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
    var registeredUser = localStorage.getItem("latestUser");
    var registeredPass = localStorage.getItem("latestPass");
    if (username === registeredUser && password === registeredPass) {
        window.location.replace("dashboard.html");
        return;
    }
    if (username == "") {
        alert("Please enter your email.");
        return;
    }
    if (password == "") {
        alert("Please enter your password.");
        return;
    }

    var emailExists = false;
    var passwordMatches = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i] === username) {
            emailExists = true;
            if (passwords[i] === password) {
                passwordMatches = true;
            }
            break; 
        }
    }

    if (emailExists && passwordMatches) {
        alert("Login successful!");
        window.location.replace("dashboard.html");
    } 
    else if (emailExists && !passwordMatches) {
        alert("Incorrect password. Please try again.");
    } 
    else if (!emailExists) {
        alert("Email not found. Please sign up first.");
    }
    var found = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i] == username && passwords[i] == password) {
            found = true;
            window.location.replace("dashboard.html");
        }
    }
    if (found == false) {
        showMessage("Invalid username or password.", "red");
    }
}
    

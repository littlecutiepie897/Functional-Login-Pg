var emails = ["shahmeerkong@gmail.com", "azan@gmail.com"];
var passwords = ["kingkong", "azan123"];

function handleSignup() {
    let user = document.getElementById("reg-username").value;
    let pass = document.getElementById("reg-password").value;
    let confPass = document.getElementById("confirm-password").value;
    if (user === "" || pass === "" || confPass === "") {
        alert("Please fill in all fields");
        return;
    }
    if (pass !== confPass) {
        alert("Passwords do not match");
        return;
    }
    if (emails.includes(user)) {
        alert("Email already exists");
        return;
    }
    else if (!user.includes("@gmail.com")) {
        alert("Please enter a valid email address");
        return;
    }
    emails.push(user);
passwords.push(pass);
localStorage.setItem("latestUser", user);
localStorage.setItem("latestPass", pass);
alert("Registration successful!");
window.location.replace("index.html");
}

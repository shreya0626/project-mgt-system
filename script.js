document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        // Simulate user and admin login (for demonstration purposes)
        if (role === "user" && username === "user" && password === "userpass") {
            // User logged in
            window.location.href = "task.html"; // Redirect to the task assignment page
        } else if (role === "admin" && username === "admin" && password === "adminpass") {
            // Admin logged in
            window.location.href = "task.html"; // Redirect to the task assignment page
        } else {
            alert("Invalid credentials. Please try again.");
        }

        // Clear input fields
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    });
});


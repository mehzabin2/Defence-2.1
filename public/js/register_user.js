document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop form from reloading

        const fullName = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const password = form.querySelectorAll('input[type="password"]')[0].value;
        const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

        // Check if all fields are filled
        if (!fullName || !email || !password || !confirmPassword) {
            alert("⚠️ Please fill in all fields.");
            return;
        }

        // Validate email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("📧 Please enter a valid email address.");
            return;
        }

        // Password validation: 1 uppercase, 1 number, 1 special char, min 6 chars
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

        if (!password.match(passwordPattern)) {
            alert("🔐 Password must contain:\n- At least one uppercase letter\n- One number\n- One special character (!@#$%^&*)\n- Minimum 6 characters");
            return;
        }

        // Confirm password check
        if (password !== confirmPassword) {
            alert("❌ Passwords do not match.");
            return;
        }

        // If all checks pass
        alert("✅ Registration successful!");
        form.reset();
    });
});

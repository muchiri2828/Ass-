document.getElementById('SigninButton').addEventListener('click', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        document.getElementById('signin-error-message').textContent = 'Please fill in all fields.';
    } else {
        // Prevent form submission or page navigation
        event.preventDefault();

        // Display the success message instead of submitting the form
        const successMessage = document.getElementById('signin-success-message');
        successMessage.textContent = 'Sign in successful!';
        successMessage.style.display = 'block';

        // Optionally hide any previous error messages
        document.getElementById('signin-error-message').textContent = '';
    }
});

document.querySelector('.forgot-password a:first-child').addEventListener('click', function(event) {
    event.preventDefault(); 

    const resetForm = `
      <form id="reset-form">
        <h2>Reset Password</h2>
        <input type="email" id="reset-email" placeholder="Enter your email address" required>
        <button type="submit">Send Reset Link</button>
      </form>
    `;

    document.querySelector('.login-container').innerHTML = resetForm;

    document.getElementById('reset-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('reset-email').value;

        console.log(`Sending password reset email to ${email}...`);

        const successMessage = document.createElement('p');
        successMessage.textContent = 'Password reset email sent successfully! Check your email for further instructions.';
    
        document.querySelector('.login-container').appendChild(successMessage);
    });
});

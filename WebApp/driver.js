async function loginWithEmail() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            window.location.href = 'drivepage.html';
        } else {
            console.error('Login failed');
            alert('Login failed');  // This is for demonstration purposes. In production, implement a more user-friendly feedback system.
        }
    } catch (error) {
        console.error('Error during login', error);
        alert('An error occurred during login. Please try again later.');  // Same as above regarding user feedback
    }
}

function onSignIn(googleUser) {
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);  // You can pass this token to your server to authenticate the user

    // Implement the logic to validate the ID token on your server, and if valid, redirect the user to the drivepage.
    // The following line is for demonstration purposes and should not be used in production without server-side validation of the ID token.
    window.location.href = 'drivepage.html';
}

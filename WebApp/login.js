function switchToSignup() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('signupModal').style.display = 'block';
}

function switchToLogin() {
    document.getElementById('signupModal').style.display = 'none';
    document.getElementById('loginModal').style.display = 'block';
}

async function apiLogin(email, password) {
    const response = await fetch('https://lcsapi1.onrender.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });
    console.log(response)
    return response.ok;
}

async function apiSignup(name, email, password) {
    const response = await fetch('https://lcsapi1.onrender.com/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    });

    return response.ok;
}

async function redirectProfile() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const signupName = document.getElementById('signupName').value;
    const signupEmail = document.getElementById('signupEmail').value;
    const signupPassword = document.getElementById('signupPassword').value;

    if (document.getElementById('loginModal').style.display === 'block') {
        const isValid = await apiLogin(loginEmail, loginPassword);
        if (isValid) {
            window.location.href = 'profilepage.html';
        } else {
            alert('Login failed');
        }
    } else {
        const isValid = await apiSignup(signupName, signupEmail, signupPassword);
        if (isValid) {
            window.location.href = 'profilepage.html';
        } else {
            alert('Signup failed');
        }
    }
}

window.onload = () => {
    gapi.load('auth2', () => {
        const auth2 = gapi.auth2.init({
            client_id: 'YOUR-GOOGLE-CLIENT-ID.apps.googleusercontent.com'
        });

        auth2.attachClickHandler('btnGoogle', {}, googleUser => {
            console.log(googleUser.getBasicProfile().getName());
            window.location.href = 'profilepage.html';
        }, error => {
            console.error(JSON.stringify(error, undefined, 2));
            alert('Error during Google login.');
        });
    });
};
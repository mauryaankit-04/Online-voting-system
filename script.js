
let isLoggedIn = false;

function login() {
    const aadhaar = document.getElementById('aadhaar').value;
    const password = document.getElementById('password').value;

    if (aadhaar.length === 12 && password) {
        isLoggedIn = true;
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('voting-page').classList.remove('hidden');
        enableVoting();
    } else {
        alert('Please enter valid Aadhaar and Password');
    }
}

function enableVoting() {
    if (isLoggedIn) {
        const buttons = document.querySelectorAll('#candidates button');
        buttons.forEach(button => {
            button.classList.remove('disabled');
            button.disabled = false;
        });
    }
}

function vote(candidate) {
    if (isLoggedIn) {
        document.getElementById('voting-page').classList.add('hidden');
        const message = `Thank you for voting Candidate ${candidate}`;
        document.getElementById('thank-you-message').innerText = message;
        document.getElementById('thank-you-page').classList.remove('hidden');
    } else {
        alert('You need to log in first!');
    }
}

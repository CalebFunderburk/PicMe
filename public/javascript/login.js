

// Login logic
async function loginFormHandler(event) {
    event.preventDefault()

    // HTML elements
    const email = document.querySelector('#email-login').value.trim()
    const password = document.querySelector('#password-login').value.trim()

    // Login the user if all fields are filled
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText)
        }
    }
}

// Event listeners
document.querySelector('.login-form').addEventListener('submit', loginFormHandler)

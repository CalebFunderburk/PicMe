// Logic to handle user signup
async function signupFormHandler(event) {
    event.preventDefault()

    const username = document.querySelector('#username-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/home')
        } else {
            alert('This user may already exist in our records. Your username must be between 1 and 30 characters long, your email must be in email format, and your password must be at least 4 characters long. Please try again!')
        }
    }
}

// Event listeners
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler)
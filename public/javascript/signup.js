// Sign-up form logic
async function signupFormHandler(event) {
    event.preventDefault()

    // HTML elements
    const username = document.querySelector('#username-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()

    // Store data if all fields are filled
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
        console.log(response)

        if (response.ok) {
            document.location.replace('/')
            console.log('success')
        } else {
            alert(response.statusText)
        }
    }
}

//Event Listeners
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler)
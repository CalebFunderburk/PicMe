// Logic to handle user login
async function loginFormHandler(event) {
  event.preventDefault()

  const email = document.querySelector('#email-login').value.trim()
  const password = document.querySelector('#password-login').value.trim()

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
      document.location.replace('/home')
    } else {
      alert('This user information does not match any found in our records. Please try a new email or password!')
    }
  }
}

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
      alert('This user may already exist in our records. Your username must be between 1 and 30 characters long, your email must be in email format, and your password must be at least 4 characters long. Please try again!');
    }
  }
}

// Event listeners
document.querySelector('.login-form').addEventListener('submit', loginFormHandler)
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler)
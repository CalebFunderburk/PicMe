


async function editUserFormHandler(event) {
    event.preventDefault();

    // const userId = res.session.user_id

    const website = document.querySelector('input[name="user-website"]').value.trim();
    const bio = document.querySelector('input[name="user-bio"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const user_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/users/${user_id}`, {
        method: 'put',
        body: JSON.stringify({
            email,
            website,
            bio
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#editProfile').addEventListener('submit', editUserFormHandler);
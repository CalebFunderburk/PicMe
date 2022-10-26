
async function editUserFormHandler(event) {
    event.preventDefault();

    const website = document.querySelector('input[name="user-website"]').value.trim();
    const user_bio = document.querySelector('input[name="user-bio"]').value.trim();
    const user_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/users/${user_id}`, {
        method: 'put',
        body: JSON.stringify({
           
            website,
            user_bio
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-user-form').addEventListener('submit', editUserFormHandler);
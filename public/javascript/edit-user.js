
async function editUserFormHandler(event) {
    event.preventDefault();

    const website = document.querySelector('input[text="user-website"]').value;
    const user_bio = document.querySelector('textarea[name="user-bio"]').value.trim();
    const user_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${user_id}`, {
        method: 'PUT',
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

document.querySelector('.edit-post-form').addEventListener('submit', editUserFormHandler);
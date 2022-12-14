// Logic to handle liking a post
async function upvoteClickHandler(event) {
    event.preventDefault()

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        document.location.reload()
    } else {
        alert("You have already liked this post!")
    }
}

// Event listeners
document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler)
// Logic to add server authentication
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login')
    } else {
        next()
    }
}

// Exports
module.exports = withAuth
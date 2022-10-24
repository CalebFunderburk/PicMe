const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
<<<<<<< HEAD
        res.redirect('/login');
    } else {
        next();
=======
        res.redirect('/login')
    } else {
        next()
>>>>>>> e99376de1d8d38292300bbdaff6bf39d5a2160d0
    }
};

module.exports = withAuth;
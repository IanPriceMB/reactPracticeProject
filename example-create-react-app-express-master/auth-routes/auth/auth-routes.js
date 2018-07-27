const router = require('express').Router();
const passport = require('passport');

//auth/pp/signout logout
router.get('/logout', (req, res) => {
    //handle with passport
    req.logout();
    res.redirect('http://localhost:3000');
})

//auth/pp/gogole with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('http://localhost:3000/signup/' + req.user.id)
});

module.exports = router;
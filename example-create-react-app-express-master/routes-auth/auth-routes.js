const router = require('express').Router();
const passport = require('passport');

//auth logout
router.get('/signout', (req, res) => {
    //handle with passport
    req.logout();
    res.redirect('http://localhost:3000/')
    console.log(req.headers)
})

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('http://localhost:3000/signup/'+req.user.id)
    console.log(req.headers)
});

module.exports = router;
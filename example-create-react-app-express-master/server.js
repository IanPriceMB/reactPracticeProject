const express = require('express');
const path = require('path');
const apiRoutes = require("./routes-api");
const authRoutes = require("./routes-auth");
const passportSetup = require('./config/passport-setup')
const mongoose = require('mongoose');
const keys = require('./config/keys')
const cookieSession = require('cookie-session');
const passport = require('passport')
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieSession({
  name: 'session',
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}))

//initialize passport 
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/esportsScoutingServices");



if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build'));

  // Handle React routing, return all requests to React app
  // app.get('*', function(req, res) {
  //   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  // });
}

app.use(authRoutes);
app.use(apiRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));

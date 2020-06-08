var passport = require('passport');
var localStrategy = require('passport-local');
var User = require('./models/user');

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


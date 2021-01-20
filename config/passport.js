const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTstrategy = require("passport-jwt").Strategy;
// Use this to extract the JWT sent by the user
const ExtractJWT = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcryptjs");

let opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "logger_secret";

const db = require("../models");

// Create a passport middleware to handle User login
passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        //Find the user associated with the email provided by the user
        const user = await db.User.findOne({
          where: {
            email: email,
          },
        });

        if (!user) {
          //If the user does not exist, return error
          return done(null, false, { message: "User not found" });
        }
        //Validate password and make sure it matches with the corresponding hash stored in the database
        const validate = await bcrypt.compare(password, user.password);

        if (!validate) {
          return done(null, false, { message: "Incorrect Password" });
        }
        //Send the user information to the next middleware
        return done(null, user, { message: "Logged in Successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

//This verifies the validity of the token being sent
passport.use(
  new JWTstrategy(opts, async (token, done) => {
    try {
      //Pass the user details to the next middleware
      return done(null, token.user);
    } catch (error) {
      done(error);
    }
  })
);

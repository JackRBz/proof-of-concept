const passport = require("passport");
const jwt = require("jsonwebtoken");
var db = require("../models");
const bcrypt = require("bcryptjs");

//@desc   Log user in
//@route  POST /auth/login
//@access Public
exports.login = async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        return res.status(401).json({ status: false, error: err });
      }
      // session set to false purposely because we are not saving the user details in a session
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        // We don't want to store the sensitive information such as the
        // user password in the token so we pick only the user id
        // Sign the JWT token and populate the payload with the user email and id
        // Token expires in 1hour as described here https://github.com/auth0/node-jsonwebtoken\
        // TODO: Move secret to env file
        const token = jwt.sign({ id: user.id ,user: user }, "logger_secret", {
          expiresIn: 60 * 60,
        });
        //Send back the token to the user
        return res.json({ token: token, user: user });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

//@desc   Retrieved logged in user
//@route  POST /auth/me
//@access Public
exports.token = async (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    try {
      if (err) {
        console.log(err);
        // res.send(401).json(err);
      }
      if (info !== undefined) {
        res.send(401).json(info.message);
      } else {
        res.status(200).json({
          id: user._id,
          email: user.email,
          
        });
      }
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

//@desc   Log user out
//@route  POST /auth/logout
//@access Public
exports.logout = async (req, res, next) => {
  try {
    req.logout();
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
};

//@desc   Create an user
//@route  POST /api/users
//@access Public
exports.register = async (req, res) => {
  const { first_name, last_name, email, password1, password2 } = req.body;
  let errors = [];

  if (!first_name || !last_name || !email || !password1 || !password2) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password1 !== password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (password1.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      body: errors,
    });
  } else {
    db.User.findOne({
      where: {
        email: email,
      },
    }).then((user) => {
      if (user) {
        errors.push({ msg: "Email already exists" });
        return res.status(400).json({
          success: false,
          body: errors,
        });
      } else {
        const newUser = new db.User({
          first_name,
          last_name,
          email,
          password: password1,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            db.User.create({
              first_name: newUser.first_name,
              last_name: newUser.last_name,
              email: newUser.email,
              password: newUser.password,
              RoleId: 1
            })
              .then((dbUser) => {
                return res.status(201).json({
                  // 201: Successfully created
                  success: true,
                  body: dbUser,
                });
              })
              .catch((err) => console.log(err));
          });
        });
      }
    });
  }
};

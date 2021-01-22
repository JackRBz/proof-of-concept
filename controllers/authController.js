const passport = require("passport");
const jwt = require("jsonwebtoken");

const { validateInput } = require("../services/authService");
const { checkIfUserExists, addUser } = require("../services/userService");
const { sendErrorPOST, ConflictError } = require("./errors/controllerErrors");

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
        const token = jwt.sign({ id: user.id, user: user }, "logger_secret", {
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
        res.send(401).json(err);
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
  let errors = await validateInput(req.body);
  try {
    // TODO: better error handling
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        body: errors,
      });
    }
    
    const exists = await checkIfUserExists(req.body.email);
    if (exists) {
      return sendErrorPOST(res, ConflictError )
    }

    const user = await addUser(req.body);
    if (user) {
      return res.status(201).json({
        // 201: Successfully created
        success: true,
        data: user,
      });
    }

  } catch (error) {
    sendErrorPOST(res, error);
  }
};

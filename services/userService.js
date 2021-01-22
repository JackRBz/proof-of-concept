var db = require("../models");
const bcrypt = require("bcryptjs");

// User service
// checkIfUserExists, addUser

const checkIfUserExists = async (email) => {
  const user = await db.User.findOne({ where: { email: email } });
  return user ? true : false;
};

const addUser = async (user) => {
  const { first_name, last_name, email, password1, password2 } = user;
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
    });
  });
  try {
    const userAdded = await db.User.create({
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      RoleId: 1,
    });
    return userAdded;
  } catch (err) {
    return {
      error: err,
      msg: "Error adding user",
    };
  }
};

module.exports = { checkIfUserExists, addUser };

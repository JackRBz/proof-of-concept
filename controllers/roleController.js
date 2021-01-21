// Requiring our models
var db = require("../models");
const ac = require("./utils/accessPolicy");

//@desc   Create a role
//@route  POST /api/role
//@access Secure
exports.role = async (req, res) => {
  try {
    const permission = ac.can(res.user.user.Role.name).createOwn("role");
    if (permission.granted) {
    db.Role.create(req.body).then(function (data) {
      return res.status(201).json({
        // 201: Successfully created
        success: true,
        data: data,
      });
    });
  } else {
    return res.status(403).json({ success: false, message: "No permission" });
  }
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "POST failed. Message is: " + err.name + " " + err.message,
    });
  }
};

//@desc   Get all roles
//@route  GET /api/role
//@access Secure
exports.roles = async (req, res) => {
  try {
    const permission = ac.can(res.user.user.Role.name).readAny("role");
    if (permission.granted) {
      db.Role.findAll().then(function (roles) {
        return res.status(200).json({
          success: true,
          count: roles.length,
          data: roles,
        });
      });
    } else {
      return res.status(403).json({ success: false, message: "No permission" });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error:
        "GET failed. Server error. Message is: : " +
        err.name +
        " " +
        err.message,
    });
  }
};

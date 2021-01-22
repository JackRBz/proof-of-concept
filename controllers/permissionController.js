// Requiring our models
var db = require("../models");

//@desc   Create a permission
//@route  POST /api/permission
//@access Secure
exports.permission = async (req, res) => {
  try {
    db.Permission.create(req.body).then(function (data) {
      return res.status(201).json({
        // 201: Successfully created
        success: true,
        data: data,
      });
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "POST failed. Message is: " + err.name + " " + err.message,
    });
  }
};


//@desc   Get all permissions
//@route  GET /api/permission
//@access Secure
exports.permissions = async (req, res) => {
    try {
      db.Permission.findAll().then(function (permissions) {
        return res.status(200).json({
          success: true,
          count: permissions.length,
          data: permissions,
        });
      });
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
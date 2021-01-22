// Requiring our models
var db = require("../models");
const {checkRequiredFields} = require("./utils/validation");
const { sendErrorPOST, ValidationError } = require("./errors/controllerErrors");
//@desc   Create a file
//@route  POST /api/file
//@access Secure
exports.file = async (req, res) => {
  try {

    if(checkRequiredFields(req.body,"path")){
      return sendErrorPOST(res,ValidationError)
    }

    db.File.create(req.body).then(function (data) {
        db.Grant.bulkCreate([{FileId: data.id, PermissionId: 1},{FileId: data.id, PermissionId: 2}])
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


//@desc   Get all files
//@route  GET /api/file
//@access Secure
exports.files = async (req, res) => {
    const permission = ac.can().deleteAny("post");
    try {
      db.File.findAll().then(function (files) {
        return res.status(200).json({
          success: true,
          count: files.length,
          data: files,
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
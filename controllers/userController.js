// Requiring our models
var db = require("../models");
const {
  sendErrorPOST,
  sendErrorGET,
  sendErrorPUT
} = require('./errors/controllerErrors');

//@desc   Retrieve all users
//@route  GET /api/users
//@access Public
exports.users = async (req, res) => {
  try {
    // 1. Add a join to include all of each user's Posts
    const users = await db.User.findAll({});
    return res.status(200).json({ users });
    
  } catch (error) {
    sendErrorGET(res,error);
  }
};

//@desc   Retrieve a user
//@route  GET /api/users/:id
//@access Public
exports.user = async (req, res) => {
  try {
    // 2; Add a join to include all of the user's Posts here
    db.User.findOne({
        where: {
          id: req.params.id,
        }, include: [
            { model: db.Role, as: "Role"}],
         
      })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  } catch (error) {
    console.log(error);
  }
};

//@desc   Delete an user
//@route  DELETE /api/users/:id
//@access Public
exports.deleteUser = async (req, res) => {
  try {
    db.User
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  } catch (error) {
    console.log(error);
  }
};

exports.updateUser = async (req,res) => {
  try{
    db.User.update(req.body,
      {where: {id: req.params.id}}).then(function(user){
        res.json(user)
      })
  }catch(error){
    sendErrorPUT(res,error);
  }
}

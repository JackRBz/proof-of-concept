const express = require("express");
const router = express.Router();
const {
 user,
 users,
 updateUser,
 deleteUser
} = require("../../controllers/userController");

/*
The HTTP operations available are:

    POST (create a resource or generally provide data)
    GET (retrieve an index of resources or an individual resource)
    PUT (create or replace a resource)
    PATCH (update/modify a resource)
    DELETE (remove a resource)
 */

 // Get all users
router.route("/").get(users);

// Get user by id
router.route("/:id",).get(user);

// Update user by id 
router.route("/:id").put(updateUser);

// Delete user by id 
router.route("/:id").delete(deleteUser);

module.exports = router;

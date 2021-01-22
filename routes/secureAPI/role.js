const express = require("express");
const router = express.Router();
const {
 roles,
 role
} = require("../../controllers/roleController");

/*
The HTTP operations available are:

    POST (create a resource or generally provide data)
    GET (retrieve an index of resources or an individual resource)
    PUT (create or replace a resource)
    PATCH (update/modify a resource)
    DELETE (remove a resource)
 */

 // Get roles
router.route("/").get(roles);

router.route("/").post(role);

module.exports = router;
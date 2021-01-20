const express = require("express");
const router = express.Router();
const {
 permissions,
 permission
} = require("../../controllers/permissionController");

/*
The HTTP operations available are:

    POST (create a resource or generally provide data)
    GET (retrieve an index of resources or an individual resource)
    PUT (create or replace a resource)
    PATCH (update/modify a resource)
    DELETE (remove a resource)
 */

 // Get permissions
router.route("/").get(permissions);

router.route("/").post(permission);

module.exports = router;
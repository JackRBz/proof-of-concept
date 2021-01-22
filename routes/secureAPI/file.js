const express = require("express");
const router = express.Router();
const {
 files,
 file
} = require("../../controllers/fileController");

/*
The HTTP operations available are:

    POST (create a resource or generally provide data)
    GET (retrieve an index of resources or an individual resource)
    PUT (create or replace a resource)
    PATCH (update/modify a resource)
    DELETE (remove a resource)
 */

 // Get files
router.route("/").get(files);

router.route("/").post(file);

module.exports = router;
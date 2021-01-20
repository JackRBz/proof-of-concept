const router = require("express").Router();

const roleRoutes = require("./role");
const fileRoutes = require("./file");
const permissionRoutes = require("./permission");

router.use("/role", roleRoutes);

router.use("/file", fileRoutes);

router.use("/permission", permissionRoutes);


module.exports = router;

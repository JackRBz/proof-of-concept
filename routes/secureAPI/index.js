const router = require("express").Router();

const roleRoutes = require("./role");
const fileRoutes = require("./file");
const permissionRoutes = require("./permission");
const userRoutes = require("./user");

router.use("/role", roleRoutes);

router.use("/file", fileRoutes);

router.use("/permission", permissionRoutes);

router.use("/user", userRoutes);

module.exports = router;

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./auth-routes");

// API Routes
router.use("/auth", apiRoutes);

module.exports = router;

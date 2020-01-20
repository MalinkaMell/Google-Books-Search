const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html")

// API Routes
router.use("/api", apiRoutes);

// HTML Routes
router.use("/", htmlRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

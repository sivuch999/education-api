const express = require("express");
const router = express.Router();

router.use("/parcels", require("./parcels"));

module.exports = router;
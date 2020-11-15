const express = require("express");
const router = express.Router();

router.post("/getAll", require("../controllers/parcels/getAll"));
router.post("/getOne", require("../controllers/parcels/getOne"));

module.exports = router;
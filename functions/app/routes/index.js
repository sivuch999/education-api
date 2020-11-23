const express = require("express");
const router = express.Router();

router.use("/parcels", require("./parcels"));
router.post("/basic", (req, res) => {
    const handles = { code: 200, status: "OK", fail: [], data: [] };
    handles.code = 200; handles.status = "OK"; handles.data = [{ name: "soup", age: 25 },{ name: "max", age: 24 }]
    res.json(handles);
});

module.exports = router;
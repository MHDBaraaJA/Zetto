const express = require("express");
const router = express.Router();
const { order } = require("./../controllers/packageController");

router.get("/", order);

module.exports = router;

const express = require("express");
const { signup } = require("../controller/userController");

const router = express.Router();

router.get("/register", signup);

module.exports = router;

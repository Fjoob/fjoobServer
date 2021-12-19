const express = require("express");
const router = express.Router();
const { create, index, login } = require("../controller/Users");
const { createValidation,loginValidation } = require("../validations/Users");
const {validate} = require("../middlewares/validate")

router.get("/", index);
router.route("/").post(validate(createValidation), create);
router.route("/login").post(validate(loginValidation), login);

module.exports = router;

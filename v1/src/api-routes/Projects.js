const express = require("express");
const router = express.Router();
const { create, index } = require("../controller/Project");
const { createValidation } = require("../validations/Project");
const {validate} = require("../middlewares/validate")

router.get("/", index);

router.route("/").post(validate(createValidation), create);

module.exports = router;

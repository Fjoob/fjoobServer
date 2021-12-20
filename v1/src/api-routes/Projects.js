const express = require("express");
const router = express.Router();
const { create, index, update } = require("../controller/Project");
const { createValidation,updateValidation } = require("../validations/Project");
const { validate } = require("../middlewares/validate");
const authenticateToken = require("../middlewares/authenticate");

router.route("/").get(authenticateToken, index);
router.route("/").post(authenticateToken, validate(createValidation), create);
router.route("/:id").patch(authenticateToken, validate(updateValidation), update);

module.exports = router;

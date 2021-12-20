const express = require("express");
const router = express.Router();
const { create, index, login, projectList } = require("../controller/Users");
const { createValidation, loginValidation } = require("../validations/Users");
const { validate } = require("../middlewares/validate");
const authenticateToken = require("../middlewares/authenticate");

router.route("/").get(authenticateToken, index);
router.route("/projects").get(authenticateToken, projectList);
router.route("/").post(validate(createValidation), create);
router
  .route("/login")
  .post(authenticateToken, validate(loginValidation), login);

module.exports = router;

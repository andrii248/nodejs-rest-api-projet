const express = require("express");

const { validateBody } = require("../../middlewares");

const ctrlWrapper = require("../../helpers/ctrlWrapper");

const { schemas } = require("../../models/user");

const ctrl = require("../../controllers/auth/register");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

module.exports = router;

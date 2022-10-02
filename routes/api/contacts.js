const express = require("express");
const router = express.Router();

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const ctrl = require("../../controllers/contacts");

const ctrlWrapper = require("../../helpers/ctrlWrapper");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.contactAddSchema), ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put(
  "/:contactId",
  validateBody(schemas.contactAddSchema),
  ctrlWrapper(ctrl.updateById)
);

module.exports = router;

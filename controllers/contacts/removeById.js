const { removeContact } = require("../../models/contacts");

const createError = require("../../helpers/createError");

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "Contact deleted" });
};

module.exports = removeById;

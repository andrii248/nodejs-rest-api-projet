const { Contact } = require("../../models/contact");

const createError = require("../../helpers/createError");

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "Contact deleted" });
};

module.exports = removeById;

const { updateContactById } = require("../../models/contacts");

const createError = require("../../helpers/createError");

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  const result = await updateContactById(contactId, name, email, phone);
  if (!result) {
    throw createError(404);
  }
  res.status(200).json(result);
};

module.exports = updateById;

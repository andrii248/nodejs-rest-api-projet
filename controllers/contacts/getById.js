const createError = require("../../helpers/createError");
const { getContactById } = require("../../models/contacts");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = getById;

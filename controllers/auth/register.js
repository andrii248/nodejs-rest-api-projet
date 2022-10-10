const { User } = require("../../models/user");

const createError = require("../../helpers/createError");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }

  const result = await User.create({ email, password });
  res.status(201).json({
    user: {
      name: result.name,
      email: result.email,
    },
  });
};

module.exports = { register };

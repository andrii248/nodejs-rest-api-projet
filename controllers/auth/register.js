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
      email: result.email,
      password: result.password,
    },
  });
};

module.exports = { register };

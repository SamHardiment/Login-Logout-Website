const User = require("../models/users");
const bcrypt = require("bcryptjs");

async function newUser(res, req) {
  try {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(req.body.password, salt);

    await User.create({ ...req.body, password: hashed });

    res.status(201).json({ msg: "User Created" });
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = { newUser };

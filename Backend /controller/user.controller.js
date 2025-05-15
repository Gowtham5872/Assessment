const User = require("../Models/user");

exports.createUser = async (req, res) => {
  try {
    const existing = await User.findOne({ email: req.body.email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = new User(req.body);
    await user.save();

    res.status(201).json({ message: "User created", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

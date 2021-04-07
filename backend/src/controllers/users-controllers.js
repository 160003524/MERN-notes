const userCtrl = {};

const User = require('../models/user');

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.createUser = async (req, res) => {
  const { username } = req.body;

  const newUser = new User({ username });
  await newUser.save();
  res.json({ msg: 'Usuario Creado' });
};

userCtrl.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findOneAndDelete(id);
  res.json({ msg: 'Usuarios eliminado' });
};

module.exports = userCtrl;

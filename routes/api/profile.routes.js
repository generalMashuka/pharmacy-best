const profileApiRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

profileApiRouter.put('/', async (req, res) => {
  const {
    name, email, password, passwordRepeat, currentPassword,
  } = req.body;

  const user = await User.findOne({
    where: { email }
  });

  console.log(user);
  if (user) {
    if (password) {
      if (passwordRepeat === password && await bcrypt.compare(currentPassword, user.password)) {
        user.name = name;
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        user.save();
      }
    }
  }
  res.status(200).json({ message: true });
});

module.exports = profileApiRouter;

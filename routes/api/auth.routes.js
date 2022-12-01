const authApiRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authApiRouter.post('/register', async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (user) {
    return res.status(420).send('User already exists');
  }

  if (req.body.password !== req.body.passwordRepeat) {
    return res.status(420).send('Passwords are different');
  }

  const newUser = await User.create({
    email: req.body.email,
    name: req.body.name,
    password: await bcrypt.hash(req.body.password, 10),

  });

  req.session.userId = newUser.id;
  res.redirect('/');
  return undefined;
});



module.exports = authApiRouter;

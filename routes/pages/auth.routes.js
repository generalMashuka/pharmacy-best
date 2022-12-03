const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

const LoginPage = require('../../views/auth/LoginPage');
const RegisterPage = require('../../views/auth/RegisterPage');

authRouter.get('/login', async (req, res) => {
  res.renderComponent(LoginPage);
});

authRouter.post('/login', async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    req.session.userId = user.id;

    return res.json({ status: true });
=======
  //  res.redirect('/');
 // } else {
  //  res.status(420).json({ message: 'пароль введен неверно' });

  }
  return res.json({ status: 'error', message: 'Неправильный адрес электронной почты или пароль' });
});

authRouter.get('/register', async (req, res) => {
  res.renderComponent(RegisterPage);
});

authRouter.get('/logout', async (req, res) => {
  req.session.destroy((error) => {
    if (error) console.error(error);
    else {
      res.clearCookie('user_sid');
      res.redirect('/');
    }
  });
});

module.exports = authRouter;

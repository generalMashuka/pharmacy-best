const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');
const LoginPage = require('../../views/auth/LoginPage');
const RegisterPage = require('../../views/auth/RegisterPage');
const EditProfile = require('../../views/auth/EditProfile');

authRouter.get('/login', async (req, res) => {
  res.renderComponent(LoginPage);
});

authRouter.post('/login', async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.login },
  });

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    req.session.userId = user.id;
    res.redirect('/');
  }
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

authRouter.get('/edit', async (req, res) => {
  const { user } = res.locals;
  console.log(user);
  const userProfile = await User.findOne({ where: { id: user.id } });
  res.renderComponent(EditProfile, { user, userProfile });
});

authRouter.post('/edit', (req, res) => {
  try {
    const { user } = req.locals;
    const {
      name, email, password, passwordRepeat,
    } = req.body;
    if (user) {
      if (password === passwordRepeat) {
        user.name = name;
        user.email = email;
        user.password = bcrypt.hash(password, 10);
        user.save();
      }
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = authRouter;

const authApiRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authApiRouter.post('/register', async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (user) {
    return res.status(420).send({ message: 'Этот электронный адрес уже существует' });
  }

  if (req.body.password !== req.body.passwordRepeat) {
    return res.status(420).send({ message: 'Пароли не совпадают' });
  }

  const newUser = await User.create({
    email: req.body.email,
    name: req.body.name,
    password: await bcrypt.hash(req.body.password, 10),

  });

  req.session.userId = newUser.id;
  return res.status(200).send({ message: 'данные изменены' });
});

authApiRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        req.session.userId = user.id;
        res.status(200).json({ message: 'данные обработаны' });
      } else res.status(420).json({ message: 'неправильно введен логин или пароль' });
    } else res.status(420).json({ message: 'неправильно введен логин или пароль' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Извините, на сервере произошла ошибка, попробйте позже.' });
  }
});

module.exports = authApiRouter;

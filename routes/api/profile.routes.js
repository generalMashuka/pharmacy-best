const profileApiRouter = require('express').Router();
const bcrypt = require('bcrypt');

profileApiRouter.put('/', async (req, res) => {
  const { userId } = req.session;
  const { user } = res.locals;
  const {
    name, email, password, passwordRepeat, currentPassword,
  } = req.body;

  if (user && user.id === userId) {
    if (await bcrypt.compare(currentPassword, user.password)) {
      if (password) {
        if (passwordRepeat === password) {
          user.name = name;
          user.email = email;
          user.password = await bcrypt.hash(password, 10);
          await user.save();
          res.status(200).json({ message: 'данные изменены' });
        } else {
          res.status(420).json({ message: 'пароли не совпадают' });
        }
      } else {
        user.name = name;
        user.email = email;
        await user.save();
        res.status(200).json({ message: 'данные изменены' });
      }
    } else { res.status(421).json({ message: 'пароль введен неверно' }); }
  } else { res.status(550).json({ message: 'извините, на сервере какие-то неполадки' }); }
});

module.exports = profileApiRouter;

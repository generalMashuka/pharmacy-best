const mainRouter = require('express').Router();
// const { User } = require('../../db/models');

const HomePage = require('../../views/HomePage');

mainRouter.get('/', async (req, res) => {
//   const { userId } = req.session;
//   const user = userId && (await User.findByPk(Number(userId)));
  res.renderComponent(HomePage, { /*user*/ });
});

module.exports = mainRouter;

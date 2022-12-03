const profileRouter = require('express').Router();
const { Order } = require('../../db/models');

const EditProfile = require('../../views/auth/EditProfile');

profileRouter.get('/', async (req, res) => {
  const { user } = res.locals;
  const orders = await Order.findAll({ where: { email_user: user.email } });
  res.renderComponent(EditProfile, { user, orders });
});

module.exports = profileRouter;

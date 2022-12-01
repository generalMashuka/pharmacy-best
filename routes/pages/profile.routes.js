const profileRouter = require('express').Router();

const { User } = require('../../db/models');

const EditProfile = require('../../views/auth/EditProfile');

profileRouter.get('/', async (req, res) => {
  const { user } = res.locals;
  const userProfile = await User.findOne({ where: { id: user.id } });
  res.renderComponent(EditProfile, { user, userProfile });
});

module.exports = profileRouter;

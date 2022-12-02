const profileRouter = require('express').Router();

const EditProfile = require('../../views/auth/EditProfile');

profileRouter.get('/', async (req, res) => {
  const { user } = res.locals;
  res.renderComponent(EditProfile, { user });
});

module.exports = profileRouter;

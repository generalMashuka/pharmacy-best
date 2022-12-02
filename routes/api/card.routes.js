const cardApiRouter = require('express').Router();

const {
  FavoriteProduct, User, BasketProduct, Product,
} = require('../../db/models');

cardApiRouter.post('/', async (req, res) => {
  const { userId } = req.session;
  const elemId = req.body.id;
  const user = userId && (await User.findByPk(Number(userId)));
  const elem = await FavoriteProduct.findOne({ where: { user_id: userId, product_id: elemId } });
  if (!elem) {
    await FavoriteProduct.create({
      product_id: req.body.id,
      user_id: user.id,
    });
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

cardApiRouter.post('/sale', async (req, res) => {
  const { userId } = req.session;
  const elemId = req.body.id;
  const user = userId && (await User.findByPk(Number(userId)));
  const elem = await BasketProduct.findOne({ where: { user_id: userId, product_id: elemId } });
  if (!elem) {
    await BasketProduct.create({
      product_id: req.body.id,
      user_id: user.id,
      count_item: 1,
    });
  } else {
    await elem.increment('count_item', { by: 1 });
  }
  res.json({ success: true });
});

cardApiRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { userId } = req.session;
  const user = userId && (await User.findByPk(Number(userId)));
  const product = await Product.findOne({ where: Number(id), raw: true });
  console.log(product);
 
  res.json({ product });
});

module.exports = cardApiRouter;

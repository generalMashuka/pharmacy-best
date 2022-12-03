const basketRout = require('express').Router();

const { User, BasketProduct } = require('../../db/models');
const Basket = require('../../views/Basket');

basketRout.get('/', async (req, res) => {
  const { userId } = req.session;
  const user =
    userId &&
    (await User.findOne({
      where: Number(userId),
      include: [User.BasketProducts],
    }));
  // console.log(user.Products);
  res.renderComponent(Basket, { user });
});

basketRout.delete('/:id', async (req, res) => {
  const { userId } = req.session;
  const { user } = res.locals;
  if (userId === user.id) {
    const { id } = req.params;
    await BasketProduct.destroy({ where: { product_id: Number(id) } });
    res.json({ message: 'done' });
  } else {
    res.status(500).json({ message: 'Ошибка доступа' });
  }
});

basketRout.put('/:id', async (req, res) => {
  const { userId } = req.session;
  const { user } = res.locals;
  if (userId === user.id) {
    const { id } = req.params;
    const { counter } = req.body;
    const basket = await BasketProduct.findOne({ where: { product_id: Number(id) } });
    if (basket) {
      basket.count_item = counter;
      basket.save();
      res.json({ message: 'done' });
    } else res.json({ message: 'error' });
  } else {
    res.status(500).json({ message: 'Ошибка доступа' });
  }
});

module.exports = basketRout;

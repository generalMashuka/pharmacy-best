const basketRout = require('express').Router();

const { User, BasketProduct } = require('../../db/models');
const Basket = require('../../views/Basket');

basketRout.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = userId && (await User.findOne({
    where: Number(userId),
    include: [
      User.BasketProducts,
    ],
  }));
  res.renderComponent(Basket, { user });
});

basketRout.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await BasketProduct.destroy({ where: { product_id: Number(id) } });
  res.json({ message: 'done' });
});

basketRout.put('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { counter } = req.body;
  console.log(counter);
  const basket = await BasketProduct.findOne({ where: { product_id: Number(id) } });
  if (basket) {
    basket.count_item = counter;
    basket.save();
    res.json({ message: 'done' });
  } else res.json({ message: 'error' });
});

module.exports = basketRout;

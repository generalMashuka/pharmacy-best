const basketRout = require('express').Router();

const { BasketProduct, User, Product } = require('../../db/models');
const Basket = require('../../views/Basket');

basketRout.get('/', async (req, res) => {
  console.log('basket');
  const { userId } = req.session;
  console.log(userId);
  const user = userId && (await User.findOne({
    where: Number(userId),
    include: [

    ],
    raw: true,
  }));

  console.log(user);
  const productIds = await Product.findAll({
    where: { user_id: Number(userId) },
    raw: true,
    include: [
      {
        association: BasketProduct.Products,
        required: true,
      },
    ],
    order: [
      // сортируем по цене
      ['createdAt', 'DESC'],
      // если цены совпадают у двух записей, то они будут сравниваться по id
      ['id', 'DESC'],
    ],

  });
  // const products = productIds && (productIds.map(await Product.findOne(Number(userId)));
  console.log(productIds);

  res.renderComponent(Basket, { user });
});

module.exports = basketRout;

const mainRouter = require('express').Router();
const { User } = require('../../db/models');

const HomePage = require('../../views/HomePage');
const { Product } = require('../../db/models');

mainRouter.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = userId && (await User.findByPk(Number(userId)));

  const products = await Product.findAll({
    order: [
      // сортируем по цене
      ['sale_price', 'DESC'],
      // если цены совпадают у двух записей, то они будут сравниваться по id
      ['id', 'DESC'],
    ],
  });

  res.renderComponent(HomePage, { products, user });
});
mainRouter.get('/dn', async (req, res) => {
  const { userId } = req.session;
  const user = userId && (await User.findByPk(Number(userId)));

  const products = await Product.findAll({
    order: [
      // сортируем по цене
      ['sale_price', 'ASC'],
      // если цены совпадают у двух записей, то они будут сравниваться по id
      ['id', 'DESC'],
    ],
  });

  res.renderComponent(HomePage, { products, user });
});

module.exports = mainRouter;

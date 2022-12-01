const mainRouter = require('express').Router();

const { User } = require('../../db/models');

const HomePage = require('../../views/HomePage');
const { Product } = require('../../db/models');
const ProductPage = require('../../views/ProductPage');

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

mainRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { userId } = req.session;
  const user = userId && (await User.findByPk(Number(userId)));
  const product = await Product.findByPk(Number(id));
  res.renderComponent(ProductPage, { product, user });
});

module.exports = mainRouter;

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const mainApiRouter = require('express').Router();

const { User } = require('../../db/models');

const HomePage = require('../../views/HomePage');
const { Product } = require('../../db/models');
const ProductContainer = require('../../views/ProductContainer');

mainApiRouter.get('/dn', async (req, res) => {
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
  const element = React.createElement(ProductContainer, { products, user });
  const newHtml = ReactDOMServer.renderToStaticMarkup(element);
  res.send(newHtml);
});

mainApiRouter.get('/', async (req, res) => {
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
  const element = React.createElement(ProductContainer, { products, user });
  const newHtml = ReactDOMServer.renderToStaticMarkup(element);
  res.send(newHtml);
});

module.exports = mainApiRouter;

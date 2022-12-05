const router = require('express').Router();
const FavoritePage = require('../../views/FavoritePage');
const { Product, FavoriteProduct, User } = require('../../db/models');

router.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = await User.findOne({ where: { id: userId } });
  //   console.log(user);
  const favoriteProducts = await FavoriteProduct.findAll({ where: { user_id: userId }, include: [FavoriteProduct.Product] });
  // const productList = await Promise.all(favoriteProducts.map(async (el) => await Product.findOne({ where: { id: el.product_id } })));
  // const productList = await Product.findAll({ where: { id: favoriteProducts.map((el) => el.product_id) } });
  const productList = favoriteProducts.map((el) => el.Product);
  // console.log(productList);
  res.renderComponent(
    FavoritePage,
    {
      title: 'My favorites',
      user,
      products: productList,
    },
    { doctype: false }
  );
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const product = await FavoriteProduct.findOne({ where: { product_id: Number(id) } });
  product.destroy();
  res.json({ message: 'done' });
});

module.exports = router;

// basketRout.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   await BasketProduct.destroy({ where: { product_id: Number(id) } });
//   res.json({ message: 'done' });
// });

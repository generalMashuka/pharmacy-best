const basketApiRouter = require('express').Router();

const {
  User, BasketProduct, Product, Order,
} = require('../../db/models');
const Basket = require('../../views/Basket');

basketApiRouter.post('/order', async (req, res) => {
  const { userId } = req.session;
  const { inputComment } = req.body;
  const user = userId
    && (await User.findOne({
      where: Number(userId),
    }));
  const userEmail = user.email;
  const elem = await BasketProduct.findAll({ where: { user_id: userId } });
  const productId = elem.map((el) => el.product_id);
  const productCount = elem.map((el) => el.count_item);
  // console.log(productId);

  const p = await Promise.all(
    productId.map(async (el) => {
      const prod = await Product.findOne({
        where: {
          id: el,
        },
      });
      return prod.name;
    }),
  );
  const totalPrice = await Promise.all(
    productId.map(async (el) => {
      const prod = await Product.findOne({
        where: {
          id: el,
        },
      });
      return prod.sale_price;
    }),
  );

  await console.log(totalPrice);

  const priceItem = totalPrice.map((el, index) => el * productCount[index]);

  const price = await priceItem.reduce((acc, el) => acc + el);

  await console.log(price);

  const productList = p.map((el, index) => `${el}-${productCount[index]}шт`).join();

  await Order.create({
    email_user: userEmail,
    product_list: productList,
    status: 'Комплектуется',
    total_price: price,
    comment: `комментарий к заказу: ${inputComment} `,
  });
  await BasketProduct.destroy({ where: { user_id: userId } });

  res.send();
});

module.exports = basketApiRouter;

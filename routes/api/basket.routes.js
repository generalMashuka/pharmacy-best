const basketApiRouter = require('express').Router();

const { User, BasketProduct, Product, Order } = require('../../db/models');
const Basket = require('../../views/Basket');

basketApiRouter.post('/order', async (req, res) => {
  const { userId } = req.session;
  const { inputComment } = req.body;
  const user =
    userId &&
    (await User.findOne({
      where: Number(userId),
    }));
  const userEmail = user.email;
  const elem = await BasketProduct.findAll({
    where: { user_id: userId },
    include: [BasketProduct.Product],
  });
  const products = elem.map((el) => el.Product);
  const productCount = elem.map((el) => el.count_item);
  // console.log(productId);

  // await console.log(totalPrice);

  const priceItem = products.map((el, index) => el.sale_price * productCount[index]);

  const price = await priceItem.reduce((acc, el) => acc + el);

  await console.log(price);

  const productList = products.map((el, index) => `${el.name}-${productCount[index]}шт`).join();

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

const React = require('react');
const Layout = require('./Layout');

// React-компонент
function Busket({ user }) {
  const arr = user.Products;
  return (
    <Layout user={user}>
      <div className="products">
        {arr.map((product) => (
          <div className="product" id={product.id}>
            <img src={product.img} alt="" />
            <div className="item">{product.name}</div>
            <div className="item">{product.sale_price}</div>

            <div className="item">
              <input type="number" name="counter" id={product.id} className="counterBtn" defaultValue={product.BasketProduct.count_item} />
            </div>
            {/* <div className="item">{product.BasketProduct.count_item}</div> */}
            <div className="delProdBtn">Delete</div>
          </div>
        ))}
      </div>
      <script src="basket.js" />
      <link rel="stylesheet" href="/style/basket.css" />
    </Layout>
  );
}

module.exports = Busket;

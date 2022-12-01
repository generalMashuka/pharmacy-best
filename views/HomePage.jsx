const React = require('react');
const Layout = require('./Layout');
const Product = require('./Product');

function HomePage({ products, user }) {
  return (
    <Layout title="Pharmacy" user={user}>
      <div className="box">
        <div className="left">
          <div>Лекарства в наличии:</div>
          <div>
            сортировать по:
            <br />
            <a href="">возрастанию</a>
            <br />
            <a href="">убыванию</a>
          </div>
          <div id="products-container">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="right">
          <div className="calendar">calendar</div>
          <div>Бесплатные товары этой недели</div>
          <div className="week"> 3 item</div>
          <div>Бесплатные товары следующей недели</div>
          <div className="week">3 item</div>
        </div>
      </div>
      <script src="/products.js" defer />
    </Layout>
  );
}
module.exports = HomePage;

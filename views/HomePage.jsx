const React = require('react');
const Layout = require('./Layout');
const ProductContainer = require('./ProductContainer');

function HomePage({ products, user }) {
  return (
    <Layout title="Pharmacy" user={user}>
      <div className="box">
        <div className="left">
          <div>Лекарства в наличии:</div>
          <div>
            сортировать по:
            <br />
            <a className='sort-up' href="#">Убыванию</a>
            <br />
            <a className="sort-dn" href="#">
              Возрастанию
            </a>
          </div>
          <ProductContainer products={products} user={user} />
        </div>
        <div className="right">
          <div className="calendar">calendar</div>
          <div>Бесплатные товары этой недели</div>
          <div className="week"> 3 item</div>
          <div>Бесплатные товары следующей недели</div>
          <div className="week">3 item</div>
        </div>
      </div>
      <script src="/homePage.js" defer />
    </Layout>
  );
}
module.exports = HomePage;

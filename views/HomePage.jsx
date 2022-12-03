const React = require('react');
const Layout = require('./Layout');
const ProductContainer = require('./ProductContainer');

function HomePage({ products, user }) {
  return (
    <Layout title="Pharmacy" user={user}>
      <div className="box">
        <div className="left">
          <div className="in-stock">Лекарства в наличии</div>
          <div className="sort">
            <div className="text">Cортировать по: </div>
            <br />
            <a className="sort-up btn btn-primary" href="#">
              Убыванию
            </a>
            <br />
            <a className="sort-dn btn btn-primary" href="#">
              Возрастанию
            </a>
            <br />
            <div className="text">цены</div>
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

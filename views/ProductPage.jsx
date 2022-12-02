const React = require('react');
const Layout = require('./Layout');


function ProductPage({ product, user }) {
  return (
    <Layout title="Pharmacy" user={user}>
      <div id="products-container">
        <div className="card card_max" data-id={product.id}>
          <div className="card-body card_max">
            <h5 className="card-title">{product.name}</h5>
          </div>
          <img src={product.img} className="card-img-top img-box img-max" alt="..." />
          <div className="price">
            <p>
              <strike>{product.full_price}</strike>
            </p>
            <p>{product.sale_price}</p>
          </div>
          {!user && (
            <div className="price">
              <a href="/auth/login">
                {' '}
                <p className="like-btn" type="button" />
              </a>
              <a href="/auth/login">
                <p className="sale-btn" type="button" />
                {' '}
              </a>
            </div>
          )}
          {user && (
            <div className="price">
              <p className="like-btn" type="button">
                {' '}
              </p>
              <p className="sale-btn" type="button">
                {' '}
              </p>
              {' '}
              <script src="/homePage.js" defer />
            </div>
          )}
        </div>
        <script src="/style.css" />
      </div>
    </Layout>
  );
}
module.exports = ProductPage;

const React = require('react');

function Product({ product }) {
  return (
    <div className="product-card" data-id={product.id}>
      <div>
        <div className="product-title">{product.name}</div>
      </div>
      <div className="img-centr">
        <div className="product-img">
          <img src={product.img} alt="img" />
        </div>
      </div>
      <div className="price">
        <div className="product-full-price">
          <strike>{product.full_price}</strike>
        </div>
        <div className="product-sale-price">{product.sale_price}</div>
      </div>
      <div className="btn-like-sale">
        <p className="like-btn" type="button">
          <img src="/heart-regular.svg" alt="like" />
        </p>
        <p className="sale-btn" type="button">
          <img src="" alt="sale" />
        </p>
      </div>
    </div>
  );
}
module.exports = Product;

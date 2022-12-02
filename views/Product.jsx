const React = require('react');

function Product({ product, user }) {
  return (
    <div className="card" data-id={product.id}>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
      </div>
      <img src={product.img} className="card-img-top img-box" alt="..." />
      <div className="price">
        <p><strike>{product.full_price}</strike></p>
        <p>{product.sale_price}</p>
      </div>
      {user && (
      <div className="price">
        <p className="like-btn" type="button">   </p>
        <p className="sale-btn" type="button">   </p>
      </div>
      )}
    </div>
  );
}
module.exports = Product;

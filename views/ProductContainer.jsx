const React = require('react');

const Product = require('./Product');

function ProductContainer({ products, user }) {
  return (
    <div id="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} user={user} />
      ))}
    </div>
  );
}
module.exports = ProductContainer;

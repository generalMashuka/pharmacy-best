const React = require('react');
const Layout = require('./Layout');
const Product = require('./Product');

// React-компонент
function ProductPage({ product, user }) {
  return (
    <Layout user={user}>
      <Product key={product.id} product={product} />
    </Layout>
  );
}

module.exports = ProductPage;

const React = require('react');
const Layout = require('./Layout');
const FavoriteProductCard = require('./FavoriteProductCard');

function FavoritePage({ products, user }) {
  return (
    <Layout title="Favorite" user={user}>
      <div id="favorite-product">
        { products.map((product) => <FavoriteProductCard key={product.id} product={product} user={user} />)}
      </div>
    </Layout>
  );
}
module.exports = FavoritePage;

const React = require('react');
const Layout = require('./Layout');
const FavoriteProductCard = require('./FavoriteProductCard');

function FavoritePage({ products, user }) {
  return (
    <Layout title="Favorite" user={user}>
      {/* <div id="favorite-product"> */}
      <div className="favorite-product">
        { products.map((product) => <FavoriteProductCard key={product.id} product={product} user={user} />)}
        <script defer src="/deleteFavorite.js" />
      </div>
    </Layout>
  );
}

module.exports = FavoritePage;

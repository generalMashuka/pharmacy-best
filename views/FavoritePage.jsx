const React = require('react');
const Layout = require('./Layout');
const FavoriteProductCard = require('./FavoriteProdutCard');

function FavoritePage({ favorites, user }) {
  return (
    <Layout title="Favorite" user={user}>
      <div>
        {favorites.map((favorite) => <FavoriteProductCard key={favorite.id} favorite={favorite} user={user} />)}
      </div>
    </Layout>
  );
}
module.exports = FavoritePage;

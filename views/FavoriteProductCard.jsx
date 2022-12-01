const React = require('react');

module.exports = function FavoriteProductCard({ user, product }) {
  return (
    <div id={product.id} className="card favorite-card" style={{ width: '18rem' }}>
      <img src={product.img} className="card-img-top" alt="лекарство" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h5 className="card-title">{product.full_price}</h5>
        <h5 className="card-title">{product.sale_price}</h5>
        {user && (<button type="button" name={product.id} className="btn btn-danger btn-favorite remove-btn">Удалить</button>)}
      </div>
      <script defer src="/deleteFavorite.js" />
    </div>
  );
};

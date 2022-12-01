const React = require('react');

module.exports = function FavoriteProductCard({ user, favorite }) {
  return (
    <div id={favorite.id} className="card" style={{ width: '18rem' }}>
      <img src={favorite.img} className="card-img-top" alt="лекарство" />
      <div className="card-body">
        <h5 className="card-title">{favorite.name}</h5>
        <h5 className="card-title">{favorite.full_price}</h5>
        <h5 className="card-title">{favorite.sale_price}</h5>
      </div>
      {user && (<button type="button" name={favorite.id} className="btn btn-danger btn-favorite">Удалить</button>)}
    </div>
  );
};

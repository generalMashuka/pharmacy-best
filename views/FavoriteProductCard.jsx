const React = require('react');

module.exports = function FavoriteProductCard({ user, product }) {
  return (
    <div id={product.id} className="card favorite-card" style={{ width: '18rem' }}>
      <div className="card-body card-simple">
        <div className="card-title">{product.name}</div>
      </div>
      <img src={product.img} className="card-img-top img-box" alt="лекарство" />
      <div className="price">
        <p className="card-title" style={{ color: 'red', fontSize: '22px' }}>
          <strike>{product.full_price}</strike>
          {' руб'}
        </p>
        <p className="card-title" style={{ color: 'green', fontSize: '22px' }}>{`${product.sale_price} руб`}</p>
      </div>
      <div className="price">
        {user && (<button type="button" name={product.id} className="btn btn-danger btn-favorite remove-btn">Удалить</button>)}
      </div>
      <div className="price sale-div">
        <p className="sale-btn" type="button">   </p>
      </div>
    </div>
  );
};

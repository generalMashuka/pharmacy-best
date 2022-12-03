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
        <p className="sale-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-sale">
          {' '}
        </p>
      </div>
      <div className="modal fade" id="exampleModal-sale" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Товар добавлен в Корзину
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

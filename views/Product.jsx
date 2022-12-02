const React = require('react');

function Product({ product, user }) {
  return (

    <div className="card " data-id={product.id}>

      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
      </div>
      <img src={product.img} className="card-img-top img-box" alt="..." />
      <div className="price">
        <p style={{ color: 'red', fontSize: '18px' }}>
          <strike>{product.full_price}</strike>
          {' руб'}
        </p>
        <p style={{ color: 'green', fontSize: '20px' }}>{`${product.sale_price} руб`}</p>
      </div>

      {user ? (
        <div>
          <div className="price">
            <p className="like-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-like">
              {' '}
            </p>
            <p className="sale-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-sale">
              {' '}
            </p>
            <button type="button" className="btn btn-more" data-card-id={product.id} data-bs-toggle="modal" data-bs-target={`#exampleModal-${product.id}`}>
              Подробнее
            </button>
          </div>
        </div>
      ) : (
        <button type="button" className="btn btn-more" data-card-id={product.id}>
          Подробнее
        </button>
      )}
      <div>
        <div className="modal fade" id="exampleModal-like" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Товар добавлен в Избранное
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

      <div className="modal fade" id={`exampleModal-${product.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{product.name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
            </div>
            <div className="modal-body">
              <img src={product.img} className="card-img-top img-box" alt="..." />

              <div>
                {user ? (
                  <div className="price">
                    <p className="like-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-like">
                      {' '}
                      {' '}
                    </p>
                    <p className="sale-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-sale">{' '}</p>

                  </div>
                ) : <div />}
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
module.exports = Product;

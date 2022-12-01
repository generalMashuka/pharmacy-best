const React = require('react');

function Product({ product, user }) {
  return (
    <div className='card ' data-id={product.id}>
      <div className='card-body'>
        <h5 className='card-title'>{product.name}</h5>
      </div>
      <img src={product.img} className='card-img-top img-box' alt='...' />
      <div className='price'>
        <p style={{ color: 'red', fontSize: '18px' }}>
          <strike>{product.full_price}</strike>
          {` руб`}
        </p>
        <p style={{ color: 'green', fontSize: '20px' }}>{`${product.sale_price} руб`}</p>
      </div>
      {!user && <a href={`/${product.id}`}>Подробнее</a>}
      {user && (
        <div>
          <div className='price'>
            <p className='like-btn' type='button'>
              {' '}
            </p>
            <p className='sale-btn' type='button'>
              {' '}
            </p>
            <a href={`/${product.id}`}>Подробнее</a>
          </div>
        </div>
      )}
    </div>
  );
}
module.exports = Product;

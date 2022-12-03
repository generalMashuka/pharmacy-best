const React = require('react');

const Product = require('./Product');

function FreeWeek({ product, user}) {
  return (
    <div className='body-card card' data-id={product.id}>
      <h5 className='card-title'>{product.name}</h5>
      <img src={product.img} className='card-img-free' alt='...' />
      <div className='price'>
        <p style={{ color: 'red', fontSize: '18px' }}>
          <strike>{product.full_price}</strike>
          {' руб'}
        </p>
        <p style={{ color: 'green', fontSize: '20px' }}>{`Бесплатно`}</p>
      </div>
      {user ? (
        
        <p className='sale-btn' type='button' data-bs-toggle='modal' data-bs-target='#exampleModal-sale'>
          {' '}
        </p>
      ) : (
        <div />
      )}
    </div>
  );
}
module.exports = FreeWeek;

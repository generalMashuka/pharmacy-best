const React = require('react');
const FreeWeek = require('./FreeWeek');

const Product = require('./Product');

function FreeWeekContainer({ products, user, statusFree }) {
  return (
    <div id='free-container'>
      {products.map((product) => (
        <FreeWeek key={product.id} product={product} user={user} statusFree={statusFree} />
      ))}
    </div>
  );
}
module.exports = FreeWeekContainer;

const React = require('react');

function Order({ order }) {
  // const orderStatus = ;
  return (
    <div className="container-order">
      <div className="product-list">{order.product_list}</div>
      <div className="price">{order.total_price}</div>
      <div className="comments">{order.comment}</div>
      <div className="price">{order.total_price}</div>
    </div>
  );
}

module.exports = Order;

const React = require('react');

function Order({ order }) {
  // const orderStatus = ;
  return (
    <div className="card card-order" style={{ width: '18rem' }}>
      <div className="order-box">
        <div className="card-title title-order">{order.product_list}</div>
        <div className="card-title title-order">{`Ваш заказ на ${order.total_price} рублей`}</div>
        <div className="card-title title-order">{order.comment}</div>
        <div className="card-title title-order">{`Статус: ${order.status}`}</div>
      </div>
    </div>

  /* {/* <div className="card" style= { width: "18rem" } >
<div class="list-group list-group-flush">
  <div class="list-group-item">An item</div>
  <div class="list-group-item">A second item</div>
  <div class="list-group-item">A third item</div>
</div>
</div> */
  );
}

module.exports = Order;

// const React = require('react');
// const Layout = require('./Layout');

// // React-компонент
// function Busket({ user }) {
//   const arr = user.Products.sort((a, b) => (`${a.name}`).localeCompare(b.name));
//   return (
//     <Layout user={user}>
//       <div className="products">
//         {arr.map((product) => (
//           <div className="product" id={product.id}>
//             <img src={product.img} alt="" />
//             <div className="item">{product.name}</div>
//             <div className="item">{product.sale_price}</div>

//             <div className="item">
//               <input type="number" name="counter" id={product.id} className="counterBtn" defaultValue={product.BasketProduct.count_item} />
//             </div>
//             <div className="delProdBtn">Delete</div>
//           </div>
//         ))}
//       </div>
//       <button id="orderBtn" type="submit">Оформить заказ</button>
//       <script src="basket.js" />
//       <link rel="stylesheet" href="/style/basket.css" />
//     </Layout>
//   );
// }

// module.exports = Busket;

const React = require('react');
const Layout = require('./Layout');

// React-компонент
function Busket({ user }) {
  const arr = user.Products.sort((a, b) => (`${a.name}`).localeCompare(b.name));
  return (
    <Layout user={user}>
      <div>
        <div className="products">
          {arr.map((product) => (

            <div className="card product basket-card " style={{ width: '18rem' }} id={product.id}>

              <div className="card-body basket-card-body">

                <div className="card-simple">
                  <div className="card-title">{product.name}</div>
                </div>

                <img src={product.img} className="card-img-top img-box" alt="..." />

                <div className="price">
                  <p className="card-title" style={{ color: 'green', fontSize: '22px' }}>{`${product.sale_price} руб`}</p>
                </div>

                <div className="item card-simple">
                  <input type="number" name="counter" id={product.id} className="counterBtn" defaultValue={product.BasketProduct.count_item} />
                </div>

                <div className="delProdBtn btn btn-danger btn-favorite remove-btn">Удалить</div>

              </div>
            </div>

          ))}
        </div>

        <form className="commentForm" method="POST">
          <input
            className="form-control comment-order"
            name="comment"
            autoComplete="off"
            placeholder="Комментарий к заказу"
          />
          <div className="container">
            <button id="orderBtn" className="btn btn-primary" type="submit">Оформить заказ</button>
          </div>
        </form>

      </div>

      <script src="basket.js" />
      {/* <link rel="stylesheet" href="/style/basket.css" /> */}
    </Layout>
  );
}

module.exports = Busket;

const React = require('react');
const FreeWeekContainer = require('./FreeWeekContainer');
const Layout = require('./Layout');
const ProductContainer = require('./ProductContainer');

function HomePage({ products, user }) {
  const notFreeProducts = products.filter((el) => el.free_week !== true);
  const freeProducts = products.filter((el) => el.free_week === true).filter((el, ind) => ind <= 3);
  const nextFreeProducts = products.filter((el) => el.next_free_week === true).filter((el, ind) => ind <= 3);
  return (
    <Layout title='Pharmacy' user={user}>
      <div className='box'>
        <div className='left'>
          <div className='in-stock'>Лекарства в наличии</div>
          <div className='sort'>
            <div className='text'>Cортировать по: </div>
            <br />
            <a className='sort-up btn btn-primary' href='#'>
              Убыванию
            </a>
            <br />
            <a className='sort-dn btn btn-primary' href='#'>
              Возрастанию
            </a>
            <br />
            <div className='text'>цены</div>
          </div>
          <ProductContainer products={notFreeProducts} user={user} />
        </div>
        <div className='right'>
          <div>Бесплатные товары этой недели</div>
          <div className='week'>
            {' '}
            <FreeWeekContainer products={freeProducts} user={user} />
          </div>
          <div>Бесплатные товары следующей недели</div>
          <div className='week'>
            <FreeWeekContainer products={nextFreeProducts} />
          </div>
        </div>
      </div>
      <script src='/homePage.js' defer />
    </Layout>
  );
}
module.exports = HomePage;

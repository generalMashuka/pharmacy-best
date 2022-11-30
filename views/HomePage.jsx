const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');

function HomePage({ user }) {
  return (
    <Layout title='Pharmacy' user={user}>
      <NavBar></NavBar>
      <div className='box'>
        <div className='left'>
          <div>Лекарства в наличии:</div>
        </div>
        <div className='right'>
          <div className='calendar'>calendar</div>
          <div>Бесплатные товары этой недели</div>
          <div className='week'> 3 item</div>
          <div>Бесплатные товары следующей недели</div>
          <div className='week'>3 item</div>
        </div>
      </div>
    </Layout>
  );
}
module.exports = HomePage;

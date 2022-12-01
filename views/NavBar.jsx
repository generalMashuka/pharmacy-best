const React = require('react');

function NavBar({ user }) {
  return (
    <nav className="navbar">
      <div className="container-bar">
        <a className="navbar-brand" href="/">
          ЛОГОТИП
        </a>

        <div className="navbar-login" id="navbarNav">
          {!user && (
            <a className="nav-link" href="/auth/login">
              Login
            </a>
          )}
          {!user && (
            <a className="nav-link" href="/auth/register">
              Register
            </a>
          )}
          {user && (
            <div className="navbar-logout">
              <div className="nav-link">
                Hello,
                {' '}
                <a href="/profile">
                  {' '}
                  {user.name}
                  !
                </a>
              </div>
              <div className="nav-btn">
                <div className="like-position">
                  <a href="/like">избранное</a>
                </div>
                <div className="shop-position">
                  <a href="/shop">корзина</a>
                </div>
                <div className="nav-link">
                  <a href="/auth/logout">Выйти</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;

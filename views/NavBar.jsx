const React = require('react');

function NavBar({ user }) {
  return (
    <div className="nav-flex">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active img-logo" aria-current="page" href="/">
            <img src="/img/elbrusApt.png" alt="apt" />
          </a>
        </li>
      </ul>

      {!user && (
        <div className="navbar">

          <div className="nav justify-content-end">
            <div className="nav-item">
              <a className="nav-link active nav-text" aria-current="page" href="/auth/login">
                Login
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link nav-text" href="/auth/register">
                Register
              </a>
            </div>
          </div>
        </div>

      )}

      {user && (
        <div className="navbar">
          <div className="nav-link">
            <a className="nav-text" href="/profile">
              Hello,
              {' '}

              {' '}
              {user.name}
              !
            </a>
          </div>
          <div className="nav-link">
            <div className="like-position">
              <a className="nav-text" href="/favorite">Избранное</a>
            </div>
            <div className="shop-position">
              <a className="nav-text" href="/shop">Kорзина</a>
            </div>
            <div className="nav-link">
              <a className="nav-text" href="/auth/logout">Выйти</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

module.exports = NavBar;

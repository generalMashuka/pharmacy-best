const React = require('react');

function NavBar({ user }) {
  return (

    <div className="nav-flex">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">ЛОГОТИП</a>
        </li>
      </ul>

      {!user && (
        <ul className="nav justify-content-end">

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/auth/login">Login</a>

          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth/register">Register</a>
          </li>

        </ul>
      )}
      {user && (
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link disabled">
              Hello,
              {' '}
              {user.name}
              !
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

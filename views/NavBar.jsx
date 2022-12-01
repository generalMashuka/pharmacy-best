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
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/like">Избранное</a>

          </li>
          <li className="nav-item">
            <a className="nav-link" href="/shop">Корзина</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth/logout">Выход</a>
          </li>
        </ul>
      )}
    </div>
  );
}

module.exports = NavBar;

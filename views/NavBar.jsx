const React = require('react');

function NavBar({user}){
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              ЛОГОТИП
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                
                {!user && (
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/login">
                      Login
                    </a>
                  </li>
                )}
                {!user && (
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/register">
                      Register
                    </a>
                  </li>
                )}
                {user && (
                  <li className="nav-item">
                    <span className="nav-link">Hello, {user.login}!</span>
                  </li>
                )}
                {user && (
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/logout">
                      Logout
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      );
}

module.exports=NavBar
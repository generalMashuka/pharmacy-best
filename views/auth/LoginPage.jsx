const React = require('react');
const Layout = require('../Layout');

function LoginPage({ user }) {
  return (
    <Layout user={user}>
      <form id="login-form" action="/auth/login" method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">
            Login
          </label>
          <input
            className="form-control"
            id="exampleInputLogin1"
            aria-describedby="loginHelp"
            name="email"
            autoComplete="off"
            placeholder="введите E-mail"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            autoComplete="off"
            placeholder="введите пароль"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <script src="/loginPage.js" defer />
    </Layout>
  );
}

module.exports = LoginPage;

const React = require('react');
const Layout = require('../Layout');

function LoginPage({ user }) {
  return (
    <Layout user={user}>
      <form action="/auth/login" method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">
            Login
          </label>
          <input
            className="form-control"
            id="exampleInputLogin1"
            aria-describedby="loginHelp"
            name="login"
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
}

module.exports = LoginPage;

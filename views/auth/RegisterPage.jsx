const React = require('react');
const Layout = require('../Layout');

function RegisterPage({ user }) {
  return (
    <Layout user={user}>
      <form id="register-form">
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
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            id="exampleInputName"
            aria-describedby="loginHelp"
            name="name"
            autoComplete="off"
            placeholder="введите свое имя"
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
            id="exampleInputPassword2"
            name="password"

            autoComplete="off"
            placeholder="введите пароль"

          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword2"
            className="form-label"
          >
            Repeat Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="passwordRepeat"

            autoComplete="off"
            placeholder="подтвердите пароль"

          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="message" />
      <script src="/registerPage.js" />
    </Layout>
  );
}

module.exports = RegisterPage;

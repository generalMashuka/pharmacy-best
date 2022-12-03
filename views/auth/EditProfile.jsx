const React = require('react');
const Layout = require('../Layout');

function EditProfile({ user }) {
  // console.log(user);

  return (
    <Layout user={user}>
      <form id="edit-profile-form">
        <div className="mb-3">
          <p className="in-stock">Изменить данные профиля</p>
          <label htmlFor="exampleInputLogin1" className="form-label">
            Login(email)
          </label>
          <input
            className="form-control"
            id="exampleInputLogin1"
            aria-describedby="loginHelp"
            name="email"
            defaultValue={user.email}
            autoComplete="off"
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
            defaultValue={user.name}
            autoComplete="off"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="password"
            placeholder="********"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword2"
            className="form-label"
          >
            Repeat New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="passwordRepeat"
            placeholder="********"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword2"
            className="form-label"
          >
            Current Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="currentPassword"
            placeholder="********"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <script src="/js/editProfile.js" />
      {/* <div className='message'></div> */}
    </Layout>
  );
}

module.exports = EditProfile;

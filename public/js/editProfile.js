document.querySelector('#edit-profile-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const {
    email, password, passwordRepeat, name, currentPassword,
  } = event.target;
  console.log(passwordRepeat.value);

  const response = await fetch('/api/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        email: email.value,
        password: password.value,
        passwordRepeat: passwordRepeat.value,
        name: name.value,
        currentPassword: currentPassword.value,
      },
    ),
  });
  const data = await response.json();
  if (data.errormessage) {
    alert('Пароли не совпадают');
  } else {
    // редирект на главную
    window.location.assign('/');
  }
});

document.querySelector('#edit-profile-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const {
    email, password, passwordRepeat, name, currentPassword,
  } = event.target;

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
  if (data.message !== 'данные изменены') {
    document.querySelector('.message').innerText = data.message;
  } else {
    // редирект на главную
    window.location.assign('/');
  }
});

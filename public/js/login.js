document.querySelector('#login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const { email, password } = event.target;

  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });
  const data = await response.json();
  if (data.message !== 'данные обработаны') {
    document.querySelector('.message').innerText = data.message;
  } else {
    // редирект на главную
    window.location.assign('/');
  }
});

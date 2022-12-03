document.getElementById('register-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const {
    email, password, passwordRepeat, name,
  } = event.target;

  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
      passwordRepeat: passwordRepeat.value,
      name: name.value,
    }),
  });

  if (response.ok) {
    // редирект на главную
    window.location.assign('/');
  } else {
    const data = await response.json();
    document.querySelector('.message').innerText = data.message;
  }
});

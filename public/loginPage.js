document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const {
    email, password,
  } = event.target;

  const response = await fetch('/auth/login', {
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
  console.log(data);

  if (data.status === 'error') {
    alert(data.message);
  } else if (data.status === true) {
    window.location.assign('/');
  }

  //   if (response.ok) {
  //     // редирект на главную
  //     window.location.assign('/');
  //   } else {
  //     const errorMessage = await response.text();
  //     alert(errorMessage);
});

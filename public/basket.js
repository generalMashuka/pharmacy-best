document.querySelector('.products').addEventListener('click', async (event) => {
  if (event.target.classList.contains('delProdBtn')) {
    const product = event.target.closest('.product');
    const res = await fetch(`/shop/${product.id}`, {
      method: 'delete',
    });
    const data = await res.json();
    if (data.message === 'done') product.remove();
  }
});

document.querySelector('.products').addEventListener('change', async (event) => {
  if (event.target.classList.contains('counterBtn')) {
    const { id } = event.target;
    const counter = event.target.value;
    await fetch(`/shop/${Number(id)}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ counter }),
    });
  }
});

document.querySelector('#orderBtn').addEventListener('click', async (event) => {
  const data = await fetch('/api/shop/order');
  const resData = await data.json();
  console.log(resData);
});

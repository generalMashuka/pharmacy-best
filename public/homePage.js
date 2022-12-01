document.querySelector('#products-container').addEventListener('click', async (event) => {
  if (event.target.classList.contains('like-btn')) {
    event.preventDefault();
    const likeBtn = event.target;
    const card = likeBtn.closest('.card');
    const id = Number(card.dataset.id);
    const response = await fetch('/api/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();
    if (result.success) alert('товар добавлен в избранное');
    else alert('товар уже в избранном');
  } else if (event.target.classList.contains('sale-btn')) {
    event.preventDefault();
    const saleBtn = event.target;
    const card = saleBtn.closest('.card');
    const id = Number(card.dataset.id);
    const response = await fetch('/api/card/sale', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();
    if (result.success) alert('товар добавлен в корзину');
  }
});

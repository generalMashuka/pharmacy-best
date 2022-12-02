const container = document.querySelector('.left');

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
  } else if (event.target.classList.contains('btn-card')) {
    const btnCard = event.target;
    const card = btnCard.closest('.card');
    const id = Number(card.dataset.id);
    const res = await fetch(`/api/card/${id}`);
    const { product } = await res.json();

    console.log(product.product);

    if (product) {
      container.innerHTML = `<div id="products-container">
        <div class="card card_max" data-id=${product.id}>
          <div class="card-body card_max">
            <h5 class="card-title">${product.name}</h5>
          </div>
          <img src=${product.img} class="card-img-top img-box img-max" alt="..." />
          <div class="price">
            <p>
              <strike>${product.full_price}</strike>
            </p>
            <p>${product.sale_price}</p>
          </div>`;
    }
  }
});
let htmlContainer = container.querySelector('#products-container');


container.querySelector('.sort-dn').addEventListener('click', async (event) => {
  event.preventDefault();
  const res = await fetch('/api/dn');
  const html = await res.text();
  htmlContainer.innerHTML = html;
});

container.querySelector('.sort-up').addEventListener('click', async (event) => {
  event.preventDefault();
  const res = await fetch('/api/');
  const html = await res.text();
  htmlContainer.innerHTML = html;
});

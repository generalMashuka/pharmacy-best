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
    // const {product} = gh.product
    const container = document.querySelector('.left');
    console.log(product.product);

    if (product) {
      container.innerHTML =
        // `  <div class="card " data-id=${product.id}>
        //   <div class="card-body">
        //     <h5 class="card-title">${product.name}</h5>
        //   </div>
        //   <img src=${product.img} class="card-img-top img-box" alt="..." />
        //   <div class="price">
        //     <p style="color: 'red', fontSize: '18px'">
        //       <strike>${product.full_price}</strike>
        //       ' руб'
        //     </p>
        //     <p style=" color: 'green', fontSize: '20px' ">${product.sale_price} руб</p>
        //   </div>
        // </div>`;

        `<div id="products-container">
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
    // window.location.href = `/api/card/${id}`;
  }
});

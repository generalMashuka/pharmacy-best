document.querySelector('.favorite-product').addEventListener('click', async (event) => {
  // console.log(event.target);
  if (event.target.classList.contains('remove-btn')) {
    const product = event.target.closest('.card');
    const productId = Number(product.id);
    //console.log(event.target);
    const res = await fetch(`/favorite/delete/${productId}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.message === 'done');
    product.remove();
  } else if (event.target.classList.contains('sale-btn')) {
    const saleBtn = event.target;
    //console.log(event.target);
    const product = saleBtn.closest('.card');
    const id = Number(product.id);
    const response = await fetch('/api/card/sale', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
      // console.log(response);
    const result = await response.json();
    // console.log(result);
    if (result.success) alert(result.success);
  }
});

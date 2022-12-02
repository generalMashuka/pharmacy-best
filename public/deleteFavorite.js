document
  .getElementById('favorite-product')
  .addEventListener('click', async (event) => {
    //console.log(event.target);
    const product = event.target.closest('.card');
    const productId = product.id;
    console.log(productId);
    const res = await fetch(`/favorite/delete/${productId}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.message === 'done');
    product.remove();
  });

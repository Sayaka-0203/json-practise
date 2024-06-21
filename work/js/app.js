document.addEventListener('DOMContentLoaded',function(){
  fetch('data/product.json')
  .then(response => response.json())
  .then(products => {
    const productTable = document.getElementById('productTable');
    for(let i = 0;i < products.length; i++){
      const product = products[i];
        const td = document.createElement('td');
        td.textContent = `${product.id},${product.name},${product.price},${product.description}`;
        productTable.appendChild(td);
    };
  })
  .catch(error => console.error('エラー:', error));
});

document.addEventListener('DOMContentLoaded',function(){
  fetch('data/product.json')
  .then(response => response.json())
  .then(products => {
    const productTable = document.getElementById('productTable');
    for(let i = 0;i < products.length; i++){
      const product = products[i];
      const Tr = document.createElement('tr');
            Tr.textContent = [`${product.id}`,`${product.name}`,`${product.price}`,`${product.description}`] ;
            productTable.appendChild(Tr);
    }
  })
  .catch(error => console.error('エラー:', error));
});
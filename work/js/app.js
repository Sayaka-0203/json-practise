document.addEventListener('DOMContentLoaded',function(){
  fetch('data/product.json')
  .then(response => response.json())
  .then(products => {
    const productTable = document.getElementById('productTable');
    for(let i = 0; i < products.length; i++){
      const product = products[i];
      const tr = document.createElement('tr');
        const idTd = document.createElement("td");
        idTd.textContent = product.id;
        tr.appendChild(idTd);
        const nameTd = document.createElement("td");
        nameTd.textContent = product.name;
        tr.appendChild(nameTd);
        const priceTd = document.createElement("td");
        priceTd.textContent = product.price;
        tr.appendChild(priceTd);
        const descriptionTd = document.createElement("td");
        descriptionTd.textContent = product.description;
        tr.appendChild(descriptionTd);
        productTable.appendChild(tr);
    };
  })
  .catch(error => console.error('エラー:', error));
});

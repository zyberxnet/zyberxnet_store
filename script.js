
function openForm(product, price) {
  document.getElementById('formModal').style.display = 'block';
  document.getElementById('productField').value = product;
  document.getElementById('priceField').value = price;
}

function closeForm() {
  document.getElementById('formModal').style.display = 'none';
}

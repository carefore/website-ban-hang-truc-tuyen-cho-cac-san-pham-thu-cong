// scripts.js
$(document).ready(function() {
  $('#productForm').submit(function(e) {
    e.preventDefault();

    var productName = $('#productName').val();
    var productPrice = $('#productPrice').val();
    var productDescription = $('#productDescription').val();

    $.ajax({
      type: 'POST',
      url: 'save_product.php',
      data: {
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription
      },
      success: function(response) {
        // Hiển thị sản phẩm vừa thêm vào danh sách
        $('#productList').append('<div><strong>' + productName + '</strong>: ' + productDescription + ' - $' + productPrice + '</div>');
      }
    });
  });
});

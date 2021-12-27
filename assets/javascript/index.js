function createPagination() {
    var products = document.querySelectorAll('.product');
    var pagination = document.querySelector('.pagination');
    var html = `<a class="page page-1 active" onclick="showPage(1);">1</a>`;
    for (var i = 2; i <= (products.length - products.length % 8) / 8 + 1; i++) {
        var temp = `<a class="page page-${i}" onclick="showPage(${i});">${i}</a>`;
        html = html.concat(temp," ");
    }
    for (var i = 0; i < products.length; i++) {
        if (i <= 7)
            products[i].style.display = 'block';
        else
            products[i].style.display = 'none';
    }
    pagination.innerHTML = html;
}
function showPage(index) {
    var page = document.querySelector('.page-' + index);
    var pages = document.querySelectorAll('.page');
    var products = document.querySelectorAll('.product');
    var temp = 8;
    for (var i = 0; i < products.length; i++) {
        if (i >= (index - 1)*8 && i < index*8)
            products[i].style.display = 'block';
        else
            products[i].style.display = 'none';
    }
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].classList.length > 2)
            pages[i].classList.remove('active');
    }
    page.classList.add('active');
}
createPagination();

function showProducts() {
    var modal = document.querySelector('.modal-product');
    var html = `<div class="modal-container fadeInDown">
                    <div class="grid">
                        <div class="row">
                            <div class="col l-6 m-6 sm-12 product-img">
                                <img src="https://heiz5623.github.io/testStore/img/iphone13promax.jpg">
                            </div>
                            <div class="col l-6 m-6 sm-12 product-info">
                                <div class="name">iPhone</div>
                                <div class="price">1149$</div>
                                <div class="description">abcdefghijklmnopqrstuvwxyz</div>
                                <input type="number" name="quantity" value="1" min="1" max="5">
                                <div class="btn-buy"><i class="fas fa-cart-plus"></i></div>
                                <div class="btn-close"><i class="fas fa-window-close"></i></div>
                            </div>
                        </div>
                    </div>
                </div>`;
    modal.innerHTML = html;
    modal.style.display = 'flex';
    var close = document.querySelector('.btn-close');
    close.addEventListener('click', function(){
        modal.innerHTML = "";
        modal.style.display = 'none';
    });
    modal.addEventListener('click', function() {
        modal.innerHTML = "";
        modal.style.display = 'none';
    });
    var container = document.querySelector('.modal-container');
    container.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}
function showCart() {
    var cart = document.querySelector('.modal-cart');
    var html = `<div class="cart-container fadeInDown">
                    <div class="cart-top">
                        <a class="active">Giỏ hàng</a>
                        <a>Thanh toán</a>
                        <span>Tổng tiền: </span>
                        <a class="btn-close"><i class="fas fa-window-close"></i></a>
                    </div>
                    <div class="cart-content">
                        <table>
                            <tr>
                                <th>Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Xóa</th>
                            </tr>
                            <tr>
                                <td><img src="https://heiz5623.github.io/testStore/img/iphone13promax.jpg"></td>
                                <td>iPhone</td>
                                <td>1149$</td>
                                <td>1</td>
                                <td><i class="fas fa-trash"></i></td>
                            </tr>
                        </table>
                    </div>
                </div>`
    cart.innerHTML = html;
    cart.style.display = 'flex';
    var close = document.querySelector('.btn-close');
    close.addEventListener('click', function() {
        cart.innerHTML = "";
        cart.style.display = 'none';
    });
    cart.addEventListener('click', function() {
        cart.innerHTML = "";
        cart.style.display = 'none';
    })
    var container = document.querySelector('.cart-container');
    container.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}
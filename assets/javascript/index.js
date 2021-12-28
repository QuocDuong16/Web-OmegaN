// Khai báo sản phẩm
let Product = JSON.parse(localStorage.getItem('Product'));
function createProduct() {
    if (localStorage.getItem('Product') === null) {
        let product = [
            {
                id: "0",
                img: "./assets/img/iphone6.jpg",
                name: "iPhone 6s",
                description: `CPU: Apple A9 2 nhân 64-bit. 
                                RAM: 2 GB. 
                                Bộ nhớ trong: 16 GB / 64GB. 
                                Dung lượng pin: 1715 mAh.`,
                price: 113,
            },
            {
                id: "1",
                img: "./assets/img/iphone7.jpg",
                name: "iPhone 7",
                description: `CPU: Apple A10 Fusion 4 nhân 64-bit. 
                                RAM: 2 GB. 
                                Bộ nhớ trong: 32 GB. 
                                Dung lượng pin: 1960 mAh.`,
                price: 122,
            },
            {
                id: "2",
                img: "./assets/img/iphone8.jpg",
                name: "iPhone 8",
                description: `CPU: Apple A11 Bionic. 
                                RAM: 2 GB. 
                                Bộ nhớ trong: 64 GB. 
                                Dung lượng pin: 1821 mAh.`,
                price: 327,
            },
            {
                id: "3",
                img: "./assets/img/iphonex.jpg",
                name: "iPhone X",
                description: `CPU: Apple A11 Bionic APL1W72. 
                                RAM: 3 GB. 
                                Bộ nhớ trong: 64 GB. 
                                Dung lượng pin: 2716 mAh.`,
                price: 405,
            },
            {
                id: "4",
                img: "./assets/img/iphone11.jpg",
                name: "iPhone 11",
                description: `CPU: Apple A13 Bionic 6 nhân. 
                                RAM: 4 GB. 
                                Bộ nhớ trong: 64 GB. 
                                Dung lượng pin: 3110 mAh.`,
                price: 623,
            },
            {
                id: "5",
                img: "./assets/img/iphone12.jpg",
                name: "iPhone 12",
                description: `CPU: Apple A14 Bionic 6 nhân. 
                                RAM: 4 GB. 
                                Bộ nhớ trong: 64 GB. 
                                Dung lượng pin: 2815 mAh.`,
                price: 805,
            },
            {
                id: "6",
                img: "./assets/img/iphone13.jpg",
                name: "iPhone 13",
                description: `CPU: A15 Bionic. 
                                RAM: 4 GB. 
                                Bộ nhớ trong: 128 GB. 
                                Dung lượng pin: 3225 mAh.`,
                price: 1023,
            },
            {
                id: "7",
                img: "./assets/img/laptop1.jpg",
                name: "Surface Laptop Go",
                description: `CPU: 10th Gen Intel Core i5 processor – 1035G1. 
                                Card: Intel UHD Graphics. 
                                RAM: 8 GB. 
                                SSD: 128 GB.`,
                price: 785,
            },
            {
                id: "8",
                img: "./assets/img/laptop2.jpg",
                name: "Laptop ASUS VivoBook 15 A515EA",
                description: `CPU: Intel® Core™ i3-1115G4, up to 4.1 GHz, 2 cores 4 threads, 6MB Cache. 
                                Card: Intel® UHD Graphics. 
                                RAM: 4 GB. 
                                SSD: 512 GB.`,
                price: 670,
            },
            {
                id: "9",
                img: "./assets/img/laptop3.jpg",
                name: "Laptop ASUS Gaming ROG Strix G15 G513IH-HN015T",
                description: `CPU: AMD Ryzen 7 4800H 2.9GHz up to 4.2GHz 8MB. 
                                Card: NVIDIA GeForce GTX 1650 4GB GDDR6. 
                                RAM: 8 GB. 
                                SSD: 512 GB.`,
                price: 990,
            }
        ]
        localStorage.setItem('Product', JSON.stringify(product))
        Product = JSON.parse(localStorage.getItem('Product'));
    } else Product = JSON.parse(localStorage.getItem('Product'));
}
createProduct();
// Khai báo giỏ hàng
let Cart = JSON.parse(localStorage.getItem('Cart'));
Cart = [];
function createCart() {
    if (localStorage.getItem('Cart') === null) {
        var cart = [];
        localStorage.setItem('Cart', JSON.stringify(cart));
        Cart = JSON.parse(localStorage.getItem('Cart'));
    } else {
        Cart = JSON.parse(localStorage.getItem('Cart'));
    }
}
createCart();
function addProduct() {
    var product = document.querySelector('.product-list');
    var html = "";
    for (var i = 0; i < Product.length; i++) {
        var temp = `<div class="col l-3 m-4 sm-6 product">
                    <div class="container">
                        <img src="${Product[i].img}" onclick="showProducts(${Product[i].id});">
                        <a onclick="showProducts(${Product[i].id});" class="name-product">${Product[i].name}</a>
                        <span class="price-product">${Product[i].price}$</span>
                        <div><a class="add-to-cart" onclick="addToCart(${Product[i].id}, '1');"><i class="fas fa-cart-plus"></i></a></div>
                    </div>
                </div>`;
        html = html.concat(temp,"");
    }
    product.innerHTML = html;
}
addProduct();
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
function showProducts(tempId) {
    var modal = document.querySelector('.modal-product');
    var html = "";
    for (var i = 0; i < Product.length; i++) {
        if (Product[i].id == tempId) {
            html = `<div class="modal-container fadeInDown">
                    <div class="grid">
                        <div class="row">
                            <div class="col l-6 m-6 sm-12 product-img">
                                <img src="${Product[i].img}">
                            </div>
                            <div class="col l-6 m-6 sm-12 product-info">
                                <div class="name">${Product[i].name}</div>
                                <div class="price">${Product[i].price}$</div>
                                <div class="description">${Product[i].description}</div>
                                <input class="quantity-product" type="number" name="quantity" value="1" min="1" max="5">
                                <div class="btn-buy" onclick="addToCart(${Product[i].id}, document.querySelector('.quantity-product').value);"><i class="fas fa-cart-plus"></i></div>
                                <div class="btn-close"><i class="fas fa-window-close"></i></div>
                            </div>
                        </div>
                    </div>
                </div>`;
            break;
        }
    }
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
// Cart
function addToCart(tempId, tempQuantity) {
    alert("Đã thêm vào giỏ hàng");
    if (Cart != null) {
        for (var i = 0; i < Cart.length; i++) {
            if (Cart[i].id == tempId) {
                Cart[i].quantity = Number(Cart[i].quantity) +  Number(tempQuantity);
                localStorage.setItem('Cart', JSON.stringify(Cart));
                return;
            }
        }
    }
    for (var i = 0; i < Product.length; i++) {
        if (Product[i].id == tempId) {
            var tmp = {id: Product[i].id, name: Product[i].name, price: Product[i].price, img: Product[i].img, quantity: Number(tempQuantity)};
            Cart.push(tmp);
        }
    }
    localStorage.setItem('Cart', JSON.stringify(Cart));
}
function deleteFromCart(index) {
    Cart.splice(index, 1);
    localStorage.setItem('Cart', JSON.stringify(Cart));
    showCart();
}
function switchButton(index) {
    var containers = document.querySelectorAll('.cart-content');
    var options = document.querySelectorAll('.option');
    if (index != 1) {
        containers[0].classList.remove('main');
        containers[1].classList.add('main');
        options[0].classList.remove('active');
        options[1].classList.add('active');
    } else {
        containers[0].classList.add('main');
        containers[1].classList.remove('main');
        options[0].classList.add('active');
        options[1].classList.remove('active');
    }
}
function showCart() {
    var sumOfTotal = 0;
    var cart = document.querySelector('.modal-cart');
    var temp = "";
    if (Cart == null) {
        temp = "";
    } else {
        for (var i = 0; i < Cart.length; i++) {
            var tmp = `<tr>
                            <td><img src="${Cart[i].img}"></td>
                            <td>${Cart[i].name}</td>
                            <td>${Cart[i].price}$</td>
                            <td>${Cart[i].quantity}</td>
                            <td><i class="fas fa-trash" onclick="deleteFromCart(${i});"></i></td>
                        </tr>`;
            temp = temp.concat(tmp, "");
            sumOfTotal += (Cart[i].price * Cart[i].quantity);
        }
    }
    var html = `<div class="cart-container fadeInDown">
                    <div class="cart-top">
                        <a class="option active" onclick="switchButton(1);">Giỏ hàng</a>
                        <a class="option" onclick="switchButton(2);">Đặt hàng</a>
                        <span>Tổng tiền: ${sumOfTotal}</span>
                        <a class="btn-close"><i class="fas fa-window-close"></i></a>
                    </div>
                    <div class="cart-content main">
                        <table>
                            <tr>
                                <th>Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Xóa</th>
                            </tr>
                            ${temp}
                        </table>
                    </div>
                    <div class="cart-content">
                        <label for="name-customer">Tên người nhận:</label>
                        <input type="text" name="name" id="name-customer">
                        <label for="phone-number">Số điện thoại:</label>
                        <input type="text" name="sdt" id="phone-number">
                        <label for="address">Địa chỉ:</label>
                        <input type="text" name="address" id="address">
                        <label for="mail">Email:</label>
                        <input type="text" name="mail" id="mail">
                        <p>Phí ship: 2$</p>
                        <p>Thành tiền: ${sumOfTotal + 2}$</p>
                        <input type="submit" value="Đặt hàng">
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
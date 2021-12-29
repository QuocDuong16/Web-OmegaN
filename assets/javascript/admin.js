// Lấy giá trị sản phẩm, tài khoản, hóa đơn
let Account = JSON.parse(localStorage.getItem('Account'));
let Product = JSON.parse(localStorage.getItem('Product'));
let Invoice = JSON.parse(localStorage.getItem('Invoice'));
let Statistics = JSON.parse(localStorage.getItem('Statistics'));
window.onload = function() {
    showProduct();
    showAccount();
    showInvoice();
    showStatistics();
}
// Chuyển đổi giữa các mục tài khoản, sản phẩm, đơn hàng và thống kê
function showSelect(temp) {
    var actives = document.querySelectorAll(temp);
    var selects = document.querySelectorAll('.select-js');
    var displays = document.querySelectorAll('.dis-js');
    for (var i = 0; i < displays.length; i++) {
        displays[i].style.display = 'none';
    }
    for (var j = 0; j < selects.length; j++) {
        if (selects[j].classList.length > 2) {
            selects[j].classList.remove('active');
        }
    }
    actives[0].classList.add('active');
    actives[1].style.display = 'block';
    actives[2].style.display = 'block';
}
function showProduct() {
    // Hiển thị danh sách sản phẩm
    var product = document.querySelector('.product-list');
    var html = "";
    for (var i = 0; i < Product.length; i++) {
        var temp = `<tr>
                        <td>${Product[i].id}</td>
                        <td class="imgSP"><img src="${Product[i].img}" alt=""></td>
                        <td class="tenSP">${Product[i].name}</td>
                        <td>${Product[i].price}</td>
                        <td onclick="editProduct(${i});"><i class="fas fa-edit"></i></td>
                        <td onclick="deleteProduct(${i});"><i class="fas fa-trash"></i></td>
                    </tr>`;
        html = html.concat(temp,"");
    }
    product.innerHTML = html;
    // Hiển thị khung thêm hoặc sửa
    var index = Product[Product.length - 1].id;
    var product2 = document.querySelector('.product-edit');
    html = `<label for="idsp">ID sản phẩm</label>
            <input disabled type="text" name="id" id="idsp" value="${Number(index) + 1}">
            <label for="tensp">Tên sản phẩm</label>
            <input type="text" name="ten" id="tensp">
            <label for="giasp">Giá sản phẩm</label>
            <input type="text" name="gia" id="giasp">
            <label for="motasp">Mô tả sản phẩm</label>
            <input type="text" name="mo ta" id="motasp">
            <label for="hinhanh">Hình ảnh sản phẩm</label>
            <input type="file" name="anh" id="hinhanh" accept="image/png, image/gif, image/jpeg, image/jpg">
            <input onclick="addProduct();" type="submit" value="Xong">`;
    product2.innerHTML = html;
    
}
function addProduct() {
    var product = document.querySelector('.product-edit');
    var temps = product.getElementsByTagName('input');
    var id = temps[0].value;
    var name = temps[1].value;
    var price = temps[2].value;
    var description = temps[3].value;
    var image = "./assets/img/" + temps[4].value.substring(12);
    var newProduct = {id: id, img: image, name: name, description: description, price: price};
    Product.push(newProduct);
    localStorage.setItem('Product', JSON.stringify(Product));
    showProduct();
}
function deleteProduct(index) {
    Product.splice(index, 1);
    localStorage.setItem('Product', JSON.stringify(Product));
    showProduct();
}
function editProduct(index) {
    var product = document.querySelector('.product-edit');
    var html = `<label for="idsp">ID sản phẩm</label>
                <input disabled type="text" name="id" id="idsp" value="${Product[index].id}">
                <label for="tensp">Tên sản phẩm</label>
                <input type="text" name="ten" id="tensp" value="${Product[index].name}">
                <label for="giasp">Giá sản phẩm</label>
                <input type="text" name="gia" id="giasp" value="${Product[index].price}">
                <label for="motasp">Mô tả sản phẩm</label>
                <input type="text" name="mo ta" id="motasp" value="${Product[index].description}">
                <label for="hinhanh">Hình ảnh sản phẩm</label>
                <input type="file" name="anh" id="hinhanh" accept="image/png, image/gif, image/jpeg, image/jpg" value="${Product[index].img}">
                <input onclick="editProductPress();" type="submit" value="Xong">
                <input onclick="showProduct();" type="submit" value="Hủy">`;
    product.innerHTML = html;
}
function editProductPress() {
    var product = document.querySelector('.product-edit');
    var temps = product.getElementsByTagName('input');
    var id = temps[0].value;
    var name = temps[1].value;
    var price = temps[2].value;
    var description = temps[3].value;
    var image = "./assets/img/" + temps[4].value.substring(12);
    Product[id].name = name;
    Product[id].price = price;
    Product[id].description = description;
    Product[id].image = image;
    localStorage.setItem('Product', JSON.stringify(Product));
    alert("Đã sửa thông tin");
    showProduct();
}
function showAccount() {
    var account = document.querySelector('.account-list');
    var temp = "";
    for (var i = 0; i < Account.length; i++) {
        if (Account[i].properties == '1') {
            var tmp = `<tr>
                            <td>${Account[i].username}</td>
                            <td>${Account[i].password}</td>
                            <td onclick="deleteUser(${i})"><i class="fas fa-trash"></i></td>
                        </tr>`;
            temp = temp.concat(tmp, "");
        }
    }
    var html = `<tr>
                    <th>Tên tài khoản</th>
                    <th>Mật khẩu</th>
                    <th>Công cụ</th>
                </tr>
                ${temp}`;
    account.innerHTML = html;
}
function deleteUser(index) {
    Account.splice(index, 1);
    localStorage.setItem('Account', JSON.stringify(Account));
    showAccount();
}
function showInvoice() {
    var invoice = document.querySelector('.invoice-list');
    var temp = "";
    for (var i = 0; i < Invoice.length; i++) {
        var tmp = `<tr>
                        <td>${Invoice[i].name}</td>
                        <td>${Invoice[i].phone}</td>
                        <td>${Invoice[i].address}</td>
                        <td>${Invoice[i].mail}</td>
                        <td>${Invoice[i].info}</td>
                        <td>${Invoice[i].sum}</td>
                        <td onclick=""><i class="fas fa-trash"></i></td>
                    </tr>`;
        temp = temp.concat(tmp, "");
    }
    var html = `<tr>
                    <th>Tên khách hàng</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Địa chỉ mail</th>
                    <th>Thông tin sản phẩm</th>
                    <th>Tổng giá</th>
                    <th>Công cụ</th>
                </tr>
                ${temp}`;
    invoice.innerHTML = html;
}
function deleteInvoice(index) {
    Invoice.splice(index, 1);
    localStorage.setItem('Invoice', JSON.stringify(Invoice));
    showInvoice();
}
function showStatistics() {
    var statistics = document.querySelector('.statistics');
    var html = `<tr>
                    <th style="width: 50%">Tổng số sản phẩm đã bán</th>
                    <th style="width: 50%">Tổng số doanh thu</th>
                </tr>
                <tr>
                    <td>${Statistics[0].quantity}</td>
                    <td>${Statistics[0].sumOfTotal}</td>
                </tr>`;
    statistics.innerHTML = html;
}
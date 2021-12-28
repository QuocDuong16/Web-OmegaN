var isLogin = false;
function showLogin() {
    var loginRegister = document.querySelector('#login-register');
    var html = `<div class="login-container fadeInDown" id="login">
                    <div class="switch-btn" onclick="switchButton();">Or <a>sign up</a></div>
                    <div class="login-close"><i class="fas fa-window-close"></i></div>
                    <input type="text" class="username" name="login" placeholder="username">
                    <span class="regex-username"></span>
                    <input type="text" class="password" name="login" placeholder="password">
                    <span class="regex-password"></span>
                    <input type="submit" value="Log In">
                    <div class="login-footer">
                        <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
                <div class="login-container fadeInDown" id="register">
                    <div class="switch-btn" onclick="switchButton();">Go back <a>login</a></div>
                    <div class="login-close"><i class="fas fa-window-close"></i></div>
                    <input type="text" class="username" name="login" placeholder="username">
                    <span class="regex-username"></span>
                    <input type="text" class="password" name="login" placeholder="password">
                    <span class="regex-password"></span>
                    <input type="text" class="password-again" name="login" placeholder="repeat your password">
                    <span class="regex-password-again"></span>
                    <input type="submit" value="Sign Up">
                </div>`;
    loginRegister.innerHTML = html;
    loginRegister.style.display = 'flex';
    document.querySelector('#login').style.display = 'flex';
    var closes = document.querySelectorAll('.login-close');
    for (var i = 0; i < closes.length; i++) {
        closes[i].addEventListener('click', function() {
            loginRegister.innerHTML = "";
            loginRegister.style.display = 'none';
        });
    }
    loginRegister.addEventListener('click', function() {
        loginRegister.innerHTML = "";
        loginRegister.style.display = 'none';
    });
    var container = document.querySelectorAll('.login-container');
    for (var i = 0; i < container.length; i++) {
        container[i].addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}
function switchButton() {
    var login = document.querySelector('#login');
    var register = document.querySelector('#register');
    if (login.style.display == 'flex') {
        login.style.display = 'none';
        register.style.display = 'flex';
    } else {
        login.style.display = 'flex';
        register.style.display = 'none';
    }
    console.log("a");
}
var user = [];
function newAccount() {
    if (localStorage.getItem('account') === null) {
        user = [{taikhoan:'admin',matkhau:'admin',thuoctinh:'0'}];
        localStorage.setItem('account',JSON.stringify(user));
    } else {
        user = JSON.parse(localStorage.getItem('account'));
    }
}
newAccount();
function Register() {
    var isRegister = true;
    var regex;
    var register = document.getElementById('register');
    var username = register.querySelector('.username').value;
    var password = register.querySelector('.password').value;
    var password2 = register.querySelector('.password-again').value;
    regex = /^(?=.*[a-zA-Z]){8,20}$/;
    if (!regex.test(username)) {
        register.querySelector('.regex-username').innerHTML = "Tên người dùng không hợp lệ! (từ 8-20 ký tự, gồm các kí tự a-z,A-Z,0-9)";
        isRegister = false;
    } else {
        register.querySelector('.regex-username').innerHTML = "";
    }
    regex = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{8,}$/;
    if(!regex.test(password)) {
        register.querySelector('.regex-password').innerHTML = "Mật khẩu không hợp lệ! (ít nhất 8 ký tự, 1 chữ cái thường, 1 chữ cái in hoa và 1 số)";
        isRegister = false;
    } else {
        register.querySelector('.regex-password').innerHTML = "";
    }
    if (password != password2) {
        register.querySelector('.regex-password').innerHTML = "Mật khẩu không khớp";
		isRegister = false;
    } else {
        register.querySelector('.regex-password').innerHTML = "";
    }
    for (var index in user) {
        if (username == user[index].taikhoan) {
            isRegister = false;
            register.querySelector('.regex-username').innerHTML = "Tên người dùng đã tồn tại";
            break;
        }
    }
    if (isRegister) {
        var newUser = {taikhoan: username, matkhau: password, thuoctinh:'1'}
        user.push(newUser);
        localStorage.setItem('account',JSON.stringify(user));
        alert("Đăng ký thành công");
        switchButton();
    }
}
function Login() {
    var login = document.getElementById('login');
    var username = login.querySelector('.username').value;
    var password = login.querySelector('.password').value;
    if (username == "" && password == "") {
        alert("Nhập đầy đủ thông tin.");
    } else {
        for (var i = 0; i < user.length; i++) {
            if (username == user[i].taikhoan && password == user[i].matkhau) {
                alert("Đăng nhập thành công.");
                if (user[i].thuoctinh == '0') {
                    document.querySelector('.admin').style.display = 'block';
                    document.querySelector('.sign-out').style.display = 'block';
                    document.querySelector('.sign-in').style.display = 'none';
                    isLogin = true;
                    return;
                }
                isLogin = true;
                document.querySelector('.sign-out').style.display = 'block';
                document.querySelector('.sign-in').style.display = 'none';
                return;
            }
            else {
                alert("Sai tài khoản hoặc mật khẩu.");
                return;
            }
        }
    }
}
function logout() {
    document.querySelector('.admin').style.display = 'none';
    document.querySelector('.sign-out').style.display = 'none';
    document.querySelector('.sign-in').style.display = 'block';
    isLogin = false;
}
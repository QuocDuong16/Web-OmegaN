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
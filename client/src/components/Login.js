import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div id="login">   
                <h3>Đăng Nhập Để Bắt Đầu!</h3>
                <form action="/" method="post">
                    <div className="field-wrap">

                    <input type="sdt" required autoComplete="off" placeholder="Số Điện Thoại"/>

                    </div>
                    <div className="field-wrap">

                        <input type="password" required autoComplete="off" placeholder="Mật Khẩu"/>

                    </div>

                    <p className="forgot"><a href="#">Quên mật khẩu?</a></p>
                    <button className="button button-block">Đăng Nhập</button>
                </form>
            </div>
        );
    }
}

export default Login;
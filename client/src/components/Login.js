import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="form">
                            <ul className="tab-group">
                                <li className="tab ">
                                    <NavLink to="/signup" >Đăng Ký</NavLink>
                                </li>
                                <li className="tab active">
                                    <NavLink to="/login">Đăng Nhập</NavLink>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="login">   
                                    <h3>Đăng Nhập Để Bắt Đầu!</h3>
                                    <form action="/" method="post">
                                        <div className="field-wrap">

                                        <input type="sdt" required autoComplete="off" placeholder="Số Điện Thoại"/>

                                        </div>
                                        <div className="field-wrap">

                                            <input type="password" required autoComplete="off" placeholder="Mật Khẩu"/>

                                        </div>

                                        <p className="forgot"><NavLink to="/forget_pass">Quên mật khẩu?</NavLink></p>

                                        <button className="button button-block">Đăng Nhập</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

export default Login;
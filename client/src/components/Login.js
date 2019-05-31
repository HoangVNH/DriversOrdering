import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtPhoneNum: '',
            txtPassword: '',
        };
    }

    onHandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.txtPhoneNum);
        console.log(this.state.txtPassword);
    }

    render() {

        var { txtPhoneNum, txtPassword } = this.state;

        return (
            <div className="bgLogin">
                <div className="row">
                    <div className="dangky-dangnhap">
                        <div className="form">
                            <ul className="tab-group">
                                <li className="tab ">
                                    <NavLink to="/signup">Đăng Ký</NavLink>
                                </li>
                                <li className="tab active">
                                    <NavLink to="/login">Đăng Nhập</NavLink>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="login">   
                                    <h3>Đăng Nhập Để Bắt Đầu!</h3>
                                    <form action="/" method="post" onSubmit={this.onHandleSubmit}>
                                        <div className="field-wrap">

                                            <input 
                                                type="tel" 
                                                required 
                                                autoComplete="off" 
                                                placeholder="Số Điện Thoại"
                                                pattern="[0-9]{10}"
                                                name="txtPhoneNum"
                                                value={txtPhoneNum}
                                                onChange={this.onHandleChange}
                                            />

                                        </div>
                                        <div className="field-wrap">

                                            <input
                                                type="password" 
                                                required 
                                                autoComplete="off" 
                                                placeholder="Mật Khẩu" 
                                                name="txtPassword"
                                                value={txtPassword}
                                                onChange={this.onHandleChange}
                                            />

                                        </div>

                                        <p className="forgot"><NavLink to="/login/forget_pass">Quên mật khẩu?</NavLink></p>

                                        <button type="submit" className="button button-block">Đăng Nhập</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
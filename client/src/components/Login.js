import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import axios  from 'axios';

const getDriver = (PhoneNum, Password) =>  axios.post('/account/api/login', {PhoneNum,Password}).then((res) => res.data ).catch(error => console.log(error));

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            PhoneNum: '',
            Password: '',
            thongbao: null
        };
    }

    onHandleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    onHandleSubmit = (ev) => {
        ev.preventDefault();

        var item = {};

        item.PhoneNum = this.state.PhoneNum;
        item.Password = this.state.Password;

        getDriver(item.PhoneNum, item.Password).then((res) => { this.setState({ thongbao: res }) });

    }

    ThongBaoLoi = () =>{
        if(this.state.thongbao){

            return this.state.thongbao;

        } else {
            return
        }
    }

    render() {

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
                                    <form onSubmit={this.onHandleSubmit}>
                                        <div className="field-wrap">

                                            <input 
                                                type="tel" 
                                                required 
                                                autoComplete="off" 
                                                placeholder="Số Điện Thoại"
                                                pattern="[0-9]{10}"
                                                name="PhoneNum"
                                                onChange={(event) => {this.onHandleChange(event)}}
                                            />

                                        </div>
                                        <div className="field-wrap">

                                            <input
                                                type="password" 
                                                required 
                                                autoComplete="off" 
                                                placeholder="Mật Khẩu" 
                                                name="Password"
                                                onChange={(event) => {this.onHandleChange(event)}}
                                            />

                                        </div>

                                        {/* <p className="forgot"><NavLink to="/login/forget_pass">Quên mật khẩu?</NavLink></p> */}

                                        <p> {this.ThongBaoLoi()} </p>

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
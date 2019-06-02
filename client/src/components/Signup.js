import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPhoneNum: '',
            txtAddress: '',
            txtPassword: '',
            txtRePassword: ''
        }
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
        console.log(this.state.txtName);
        console.log(this.state.txtPhoneNum);
        console.log(this.state.txtAddress);
        console.log(this.state.txtPassword);
        console.log(this.state.txtRePassword);
    }


    render() {

        var { txtName, txtPhoneNum, txtAddress, txtPassword, txtRePassword } = this.state;

        return (

            <div className="bgLogin">
                <div className="row">
                    <div className="dangky-dangnhap">
                        <div className="form">
                            <ul className="tab-group">
                                <li className="tab active">
                                    <NavLink to="/signup" >Đăng Ký</NavLink>
                                </li>
                                <li className="tab">
                                    <NavLink to="/login">Đăng Nhập</NavLink>
                                </li>
                            </ul>
                            <div className="tab-content">

                                <div id="signup">   
                                    <h3>Đăng Ký</h3>
                                    <form action="/" method="post" encType="multipart/form-data">

                                        <div className="top-row">
                                            <div className="field-wrap">
                                                <input 
                                                    type="text" 
                                                    required 
                                                    autoComplete="off" 
                                                    placeholder="Họ Tên" 
                                                    name="txtName"
                                                    value={txtName}
                                                />
                                            </div>
                                            <div className="field-wrap">
                                                <input 
                                                    type="tel" 
                                                    required 
                                                    autoComplete="off"
                                                    pattern="[0-9]{10}"
                                                    placeholder="Số Điện Thoại" 
                                                    name="txtPhoneNum"
                                                    value={txtPhoneNum}
                                                />
                                            </div>
                                        </div>

                                        <div className="field-wrap">

                                            <input 
                                                type="text" 
                                                required 
                                                autoComplete="off" 
                                                placeholder="Địa Chỉ" 
                                                name="txtAddress"
                                                value={txtAddress}
                                            />

                                        </div>

                                        <div className="field-wrap">

                                            <input 
                                                type="password" 
                                                required 
                                                autoComplete="off" 
                                                placeholder="Nhập Mật Khẩu" 
                                                name="txtPassword"
                                                value={txtPassword}
                                            />

                                        </div>

                                        <div className="field-wrap">

                                            <input 
                                                type="password" 
                                                required 
                                                autoComplete="off" 
                                                placeholder="Nhập Lại Mật Khẩu" 
                                                name="txtRePassword"
                                                value={txtRePassword}
                                            />

                                        </div>

                                        <div className="field-wrap">

                                            <label htmlFor="file" className="file_label">
                                                <i className="fa fa-upload" aria-hidden="true"></i>
                                                Tải lên 3 ảnh của bạn
                                            </label>
                                            <input id="file" type="file" name="file" multiple />

                                        </div>

                                        <button type="submit" className="button button-block">Đăng Ký</button>
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

export default Signup;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import axios  from 'axios';

const addDriver = (Name, PhoneNum, Address, Password, RePassword) =>  axios.post('/account/api/signup', {Name, PhoneNum, Address, Password, RePassword}).then((res) => res.data ).catch(error => console.log(error));


class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            PhoneNum: '',
            Address: '',
            Password: '',
            RePassword: '',
            thongbao: null
        }
    }

    onHandleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    handleUploadImage = (ev) => {
        ev.preventDefault();

        var item = {};

        item.Name = this.state.Name;
        item.PhoneNum = this.state.PhoneNum;
        item.Address = this.state.Address;
        item.Password = this.state.Password;
        item.RePassword = this.state.RePassword;

        addDriver(item.Name, item.PhoneNum, item.Address, item.Password, item.RePassword).then((res) => { this.setState({ thongbao: res }) });
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

                                    <form onSubmit={this.handleUploadImage} encType="multipart/form-data">

                                        <div className="top-row">
                                            <div className="field-wrap">
                                                <input
                                                    onChange={(event) => {this.onHandleChange(event)}}
                                                    type="text" 
                                                    required 
                                                    autoComplete="off" 
                                                    placeholder="Họ Tên"
                                                    name="Name"
                                                />
                                            </div>
                                            <div className="field-wrap">
                                                <input 
                                                    onChange={(event) => {this.onHandleChange(event)}}
                                                    type="tel" 
                                                    required 
                                                    autoComplete="off"
                                                    pattern="[0-9]{10}"
                                                    placeholder="Số Điện Thoại"
                                                    name="PhoneNum"
                                                />
                                            </div>
                                        </div>

                                        <div className="field-wrap">

                                            <input
                                                onChange={(event) => {this.onHandleChange(event)}}
                                                type="text" 
                                                required 
                                                autoComplete="off" 
                                                placeholder="Địa Chỉ"
                                                name="Address"
                                            />

                                        </div>

                                        <div className="field-wrap">

                                            <input
                                                onChange={(event) => {this.onHandleChange(event)}}
                                                type="password" 
                                                required 
                                                autoComplete="off" 
                                                placeholder="Nhập Mật Khẩu"
                                                name="Password"
                                            />

                                        </div>

                                        <div className="field-wrap">

                                            <input
                                                onChange={(event) => {this.onHandleChange(event)}}
                                                type="password" 
                                                required 
                                                autoComplete="off" 
                                                placeholder="Nhập Lại Mật Khẩu" 
                                                name="RePassword"
                                            />

                                        </div>

                                        {/* <div className="field-wrap">

                                            <label htmlFor="file" className="file_label">
                                                <i className="fa fa-upload" aria-hidden="true"></i>
                                                Tải lên 3 ảnh của bạn
                                            </label>
                                            <input id="file" type="file" name="file" multiple />

                                        </div> */}

                                        <p> {this.ThongBaoLoi()} </p>

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
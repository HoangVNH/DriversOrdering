import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import AuthService from './AuthService';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();

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


    handleFormSubmit(e){
        e.preventDefault();
      
        this.Auth.signup(this.state.Name,this.state.PhoneNum, this.state.Address, this.state.Password, this.state.RePassword)
            .then(res =>{
                if(res.data === ""){
                    this.props.history.replace('/login');
                }
                else {
                    this.setState({ thongbao: res.data })
                }      
            })
            .catch(err =>{
                alert(err);
            })
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

                                    <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">

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
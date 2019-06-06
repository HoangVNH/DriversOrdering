import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';


class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            PhoneNum: '',
            Address: '',
            Password: '',
            RePassword: ''
        }
    }

    onHandleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    addUser = (Name, PhoneNum, Address, Password) => {
        
        var item = {};

        item.Name = Name;
        item.PhoneNum = PhoneNum;
        item.Address = Address;
        item.Password = Password;

        this.props.addUserStore(item);
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
                                    <form action="" method="post" encType="multipart/form-data">

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

                                        <div className="field-wrap">

                                            <label htmlFor="file" className="file_label">
                                                <i className="fa fa-upload" aria-hidden="true"></i>
                                                Tải lên 3 ảnh của bạn
                                            </label>
                                            <input id="file" type="file" name="file" multiple />

                                        </div>

                                        <button 
                                            type="submit" 
                                            onClick={(Name, PhoneNum, Address, Password) => this.addUser(this.state.Name, this.state.PhoneNum, this.state.Address, this.state.Password)} 
                                            className="button button-block">Đăng Ký</button>
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

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addUserStore: (getItem) => {
            dispatch({ type: "ADD_USER", getItem })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
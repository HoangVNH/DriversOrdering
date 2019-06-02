import React, { Component } from 'react'

import '../css/login_register/login_register.css';
import '../js/login';
import '../js/file-input';

import Signup from './Signup';
import Login from './Login';

export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
            loginAndRegister: false
        }
    }


    trangthaiForm = () =>{
        this.setState({
            status: !this.state.status
        })
    }

    trangthai_loginAndRegister = () =>{
        this.setState({
            loginAndRegister: !this.state.loginAndRegister
        })
    }

    HienThiFrom = () =>{
        if(this.state.loginAndRegister === true){
            return <Signup></Signup>
        } else {
            return <Login></Login>
        }
    }

    HienThi = () => {
        if(this.state.status === false){
            return ;

        } else {
            return (

                <div className="form">
                    <ul className="tab-group">
                        <li className="tab ">
                            <a href="#signup" onClick={() => this.trangthai_loginAndRegister()}>Đăng Ký</a>
                        </li>
                        <li className="tab active">
                            <a href="#login" onClick={() => this.trangthai_loginAndRegister()}>Đăng Nhập</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        
                        { this.HienThiFrom() }
                        
                    </div>
                </div>

            )
        }
    }


    render() {

        return (
    

            <div className="header">
                <div className="menu-box">
                    <div className="menu-btn">
                        <span className="menu-bar menu-bar-top" />
                        <span className="menu-bar menu-bar-middle" />
                        <span className="menu-bar menu-bar-bottom" />
                    </div>
                    <a href="/" className="logo">Mr.Xe Ômmm</a>
                </div>
                

                <div className="header-user">
                        
                    <div className="dang-xuat">

                        <a className="" href="#/">
                            Đăng Xuất <i className="fa fa-sign-out"></i>
                        </a>
        
                    </div>

                    
                </div>
            </div>
        )
    }
}

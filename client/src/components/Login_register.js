import React, { Component } from 'react';

import '../css/login_register/login_register.css';
import '../js/login';

import Signup from './Signup';
import Login from './Login';


class Login_register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }

    trangthai = () =>{
        this.setState({
            status: !this.state.status
        })
    }

    HienThi = () =>{
        if(this.state.status === true){
            return <Signup></Signup>
        } else {
            return <Login></Login>
        }
    }


    render() {
        
        
        return (
                <div className="form">
                    <ul className="tab-group">
                        <li className="tab ">
                            <a href="#signup" onClick={() => this.trangthai()}>Đăng Ký</a>
                        </li>
                        <li className="tab active">
                            <a href="#login" onClick={() => this.trangthai()}>Đăng Nhập</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        
                        { this.HienThi() }
                        
                    </div>
                </div>
        );
    }
}

export default Login_register;
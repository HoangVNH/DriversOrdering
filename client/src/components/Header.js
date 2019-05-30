import React, { Component } from 'react'
import Login_register from './Login_register';

export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
    }

    trangthai = () =>{
        this.setState({
            status: !this.state.status
        })
    }

    HienThi = () => {
        if(this.state.status === false){
            return ;

        } else {
            return (

                <Login_register></Login_register>

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
                    <span className="logo">Mr.Xe Ômmm</span>
                </div>
                

                <div className="header-user">
                        
                    <div className="dang-nhap">
                        <a className="" href="#/" onClick={() => this.trangthai()}>
                            Đăng Nhập/ Đăng Ký
                        </a>
        
                    </div>

                    { this.HienThi() }
                    
                </div>
            </div>
        )
    }
}

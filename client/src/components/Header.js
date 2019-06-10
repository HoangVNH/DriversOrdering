import React, { Component } from 'react'

import '../css/login_register/login_register.css';
import '../js/login';
import '../js/file-input';

import { connect } from 'react-redux'

import AuthService from './AuthService';

class header extends Component {

    constructor(props) {
        super(props)
        this.Auth = new AuthService();
    }

    handleLogout(){
        this.Auth.logout()
        this.props.history.replace('/login');
      }
    
    KiemTraState = () => {
        if(this.Auth.loggedIn()){
            return (
                <a className="" href="/login" onClick={this.handleLogout.bind(this)}>
                    Đăng Xuất <i className="fa fa-sign-out"></i>
                </a>
            )
        } else {
            if(this.props.isEdit){
                return (
                    <a className="" href="/login" onClick={this.handleLogout.bind(this)}>
                        Đăng Xuất <i className="fa fa-sign-out"></i>
                    </a>
                )
            } else {
                return 
            }
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

                        { this.KiemTraState() }
        
                    </div>

                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      isEdit: state.isEdit
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeEditStatus: () => {
        dispatch({type: "CHANGE_EDIT_STATUS"})
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(header)
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux'
import AuthService from './AuthService';


class nav extends Component {

    constructor(props) {
        super(props)
        this.Auth = new AuthService();
    }
    

    KiemTraState = () => {
        if(this.Auth.loggedIn()){

            const Auths = new AuthService();
            const getprofileUser = Auths.getProfile();
            const UserActive = getprofileUser;
            
            if(UserActive.user !== '0123456789'){
                return (
                    <NavLink to="/info">
                        <li className="cli"> 
                            <i className="fa fa-user-circle-o"></i>
                            Thông Tin Cá Nhân
                        </li>
                    </NavLink>
                )
               
            } else {
                return (
                    <NavLink to="/admin/list_driver">
                        <li className="cli"> 
                            <i className="fa fa-user-circle-o"></i>
                            Quản Lý Tài Xế
                        </li>
                    </NavLink>
                )
            }        

        } else {
            return (
                <NavLink to="/login">
                    <li className="cli"> 
                        <i className="fa fa-user-circle-o"></i>
                        Đăng Nhập
                    </li>
                </NavLink>
            )
        }   

    }

    render() {

        
        return (
            <nav>
                <ul>
                    <NavLink to="/">
                        <li className="cli"> 
                            <i className="fa fa-motorcycle"></i>
                            Đặt Xe
                        </li>
                    </NavLink>

                    { this.KiemTraState() }

                    <NavLink to="/about">
                        <li className="cli"> 
                            <i className="fa fa-info-circle"></i>
                            Thông Tin Liên Hệ
                        </li>
                    </NavLink>
                </ul>
            </nav>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(nav)
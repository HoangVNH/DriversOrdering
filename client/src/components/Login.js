import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import decode from 'jwt-decode';

import { connect } from 'react-redux';
import AuthService from './AuthService';


class Login extends Component {

    constructor(props) {
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();

        this.state = {
            PhoneNum: '',
            Password: '',
            thongbao: null,
            check: null
        }
    }

    onHandleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value
        });
    }


    ThongBaoLoi = () =>{
        if(this.state.thongbao){

            return this.state.thongbao;

        } else {
            return
        }
    }

    handleFormSubmit(e){
        e.preventDefault();
      
        this.Auth.login(this.state.PhoneNum,this.state.Password)
            .then(res =>{
                if(res.headers.token){

                    const decoded = decode((res.headers.token));
                    const admin = '0123456789';
                    if(decoded.user === admin)
                    {
                        this.props.changeEditStatus();
                        this.props.history.replace('/admin/list_driver');
                    } else {
                        this.props.changeEditStatus();
                        this.props.history.replace('/');
                    }               
                }
                else {
                    this.setState({ thongbao: res.data })
                }      
            })
            .catch(err =>{
                alert(err);
            })
    }

    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/');
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
                                    <form onSubmit={this.handleFormSubmit}>
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

const mapStateToProps = (state, ownProps) => {
    return {
      // sẽ nhận đc thuộc tính this.props.editItem
      editItem: state.editItem
     
    }
  } 
  
// dùng hàm nào trong store thì ghi vào đây
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({type: "CHANGE_EDIT_STATUS"})
        }
    }
} 


export default connect(mapStateToProps, mapDispatchToProps)(Login);
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import hinhanh from '../images/avatar_1.jpg';
import '../css/lightbox.css';


export default class Edit_Info extends Component {

    render() {
        return (
            <div className="info">
            <header className="jumbotron">
                <h1 className="text-center display-3" id="title"> Registration Form </h1>
                <div className="container">
                    <p id="description" className="lead">
                    <strong> Descripion: </strong> Short form asking a client/viewer simple questions. Related to computer science and web development. Webpage uses bootstrap 4.3.1. Form demonstrates inputs, buttons, button groups, checkboxes, dropdowns and more! </p>
                </div>
            </header>


            <div className="container">
                <div className="row">
                    <div className="col">
                        <form id="survey-form">
                            <h2 className="display-5"> Chỉnh Sửa Thông Tin Của Bạn </h2>

                            <div className="form-group d-flex">
                            <input className="form-control" type="text" id="name" placeholder="Họ tên" />
                            </div>

                            <div className="form-group d-flex">
                            <input className="form-control" type="text" id="lastName" placeholder="Số điện thoại" />
                            </div>

                            <div className="form-group d-flex">
                            <input className="form-control" type="text" id="lastName" placeholder="Địa chỉ" />
                            </div>

                            <div className="form-group d-flex">
                            <input className="form-control" type="password" id="password" placeholder="Nhập mật khẩu mới" />
                            </div>
                            
                            <div className="form-group d-flex">
                            <input className="form-control" type="password" id="repassword" placeholder="Nhập lại mật khẩu" />
                            </div>                            

                            <button className="btn btn-success pull-right" id="submit">
                                <i className="fa fa-check"></i> Lưu Thông Tin
                            </button>

                            <NavLink to="/info" className="btn btn-warning pull-right mr-4" id="submit">
                                <i className="fa fa-arrow-left"></i> Quay Về
                            </NavLink>

                        </form>

                        

                    </div>
                    <div className="col-md-4">

                    <div className="img-wrapper">
                        <div className="img-item text-center">
                            <img src="https://images.pexels.com/photos/269923/pexels-photo-269923.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="hinh1" className="img-fluid" />
                        </div>
                    </div>


                    </div>
                </div>

            </div>
        </div>
        );
    }
}
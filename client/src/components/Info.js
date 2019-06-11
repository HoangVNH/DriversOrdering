/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';

import '../css/info_user/info.css';
import '../css/lightBox/lightbox.css';
import '../js/lightbox-plus-jquery';
import '../js/file-inputs';

import AuthService from './AuthService';
import axios  from 'axios';

const getData = (PhoneNum) =>  axios.get('/account/api/getaccount' , {PhoneNum}).then((res) => res.data);

export default class Edit_Info extends Component {

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
      
        this.Auth.login(this.state.PhoneNum,this.state.Password)
            .then(res =>{
                if(res.headers.token){
                    this.props.changeEditStatus();
                    this.props.history.replace('/');
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


    componentWillMount(){
        if(!this.Auth.loggedIn()){
            this.props.history.replace('/login');
        } else {
            
        }
    }

    render() {
        return (
            <div className="info">
                <header className="jumbotron">
                    <h1 className="text-center display-5" id="title"> CHỈNH SỬA THÔNG TIN CÁ NHÂN </h1>
                    <div className="container">
                        <p id="description" className="lead">
                        <strong> Hướng dẫn: </strong> Thay đổi thông tin cá nhân của bạn một cách hợp lý và cuối cùng nhấn chọn lưu thông tin. Nếu bạn muốn muốn thay đổi hình ảnh hình ảnh thì hãy chọn ảnh để thay đổi</p>
                    </div>
                </header>


            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-hinhanh">
                            <h5 className="title">Thay đổi ảnh đại diện</h5>
                            <a className="example-image-link" href="https://via.placeholder.com/600x350" data-lightbox="example-1">
                                <img className="example-image" src="https://via.placeholder.com/600x350" alt="anh22" />
                            </a>
                            <form>
                                <div className="thaydoi">
                                    <label htmlFor="file" className="file_labels">
                                        <i className="fa fa-upload" aria-hidden="true"></i>
                                        Chọn ảnh
                                    </label>
                                    <input id="file" type="file" name="file" />
                                </div>

                                <button className="btn btn-warning btn-block">Thay đổi <i className="fa fa-check"></i></button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-hinhanh">
                            <h5 className="title">Thay đổi biển số xe</h5>
                            <a className="example-image-link" href="https://via.placeholder.com/600x350" data-lightbox="example-1">
                                <img className="example-image" src="https://via.placeholder.com/600x350" alt="anh22" />
                            </a>
                            <form>
                                <div className="thaydoi">
                                    <label htmlFor="file" className="file_labels">
                                        <i className="fa fa-upload" aria-hidden="true"></i>
                                        Chọn ảnh
                                    </label>
                                    <input id="file" type="file" name="file" />
                                </div>

                                <button className="btn btn-warning btn-block">Thay đổi <i className="fa fa-check"></i></button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-hinhanh">
                            <h5 className="title">Thay đổi hình ảnh xe</h5>
                            <a className="example-image-link" href="https://via.placeholder.com/600x350" data-lightbox="example-1">
                                <img className="example-image" src="https://via.placeholder.com/600x350" alt="anh22" />
                            </a>
                            <form>
                                <div className="thaydoi">
                                    <label htmlFor="file" className="file_labels">
                                        <i className="fa fa-upload" aria-hidden="true"></i>
                                        Chọn ảnh
                                    </label>
                                    <input id="file" type="file" name="file" />
                                </div>

                                <button className="btn btn-warning btn-block">Thay đổi <i className="fa fa-check"></i></button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-12 mb-5">
                        <form id="survey-form">
                            <h5 className="title"> Chỉnh Sửa Thông Tin Của Bạn </h5>

                            <div className="form-group d-flex">
                                <input onChange={(event) => {this.onHandleChange(event)}} className="form-control" type="text"  placeholder="Họ tên" />
                            </div>

                            <div className="form-group d-flex">
                                <input onChange={(event) => {this.onHandleChange(event)}} className="form-control" type="text"  placeholder="Số điện thoại" />
                            </div>

                            <div className="form-group d-flex">
                                <input onChange={(event) => {this.onHandleChange(event)}} className="form-control" type="text"  placeholder="Địa chỉ" />
                            </div>

                            <div className="form-group d-flex">
                                <input onChange={(event) => {this.onHandleChange(event)}} className="form-control" type="password"  placeholder="Nhập mật khẩu mới" />
                            </div>
                            
                            <div className="form-group d-flex">
                                <input onChange={(event) => {this.onHandleChange(event)}} className="form-control" type="password" placeholder="Nhập lại mật khẩu" />
                            </div>

                            <p style={{color: "red"}}> { this.ThongBaoLoi() } </p>                        

                            <button className="btn btn-danger pull-right" id="submit">
                                Lưu Thông Tin <i className="fa fa-check"></i>
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
        );
    }
}
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';

import '../css/info_user/info.css';
import '../css/lightBox/lightbox.css';
import '../js/lightbox-plus-jquery';
import '../js/file-inputs';

import AuthService from './AuthService';
import axios, { post } from 'axios';

const getData = (idUser) =>  axios.post('/account/api/getaccount',{idUser}).then((res) => res.data).catch((err) => err);
const upImage = (avatar) =>  axios.post('/account/api/upload',{avatar}).then((res) => res.data).catch((err) => err);

export default class Edit_Info extends Component {

    constructor(props) {
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();

        this.state = {
            Avatar: null
        }
    }

    handleFile = (e) => {
        const file = e.target.files[0];
        this.setState({
            Avatar: file
        })
    }

    handleUpload = (e) => {
        e.preventDefault();
        const avatar = this.state.Avatar;
        const formData = new FormData();

        formData.append('image', avatar);
        formData.append('name', 'image Drive');

        upImage(formData).then((res) => {
            console.log(res);
            
        })
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
        const id = this.Auth.getProfile();
        
        this.Auth.updateDriver(id, this.state.Name ,this.state.PhoneNum, this.state.Address)
            .then((res) =>{
                if(res){
                    alert("Cập Nhật Thành Công");
                    this.props.history.replace('/info');

                } else {
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
            
            const Auths = new AuthService();
            const profile = Auths.getProfile();
            const UserActive = profile.user;

            if(UserActive !== '0123456789'){
                var IdUser = profile._id;
                getData(IdUser).then((res) => {
                    this.setState({
                        Name: res.permission.name,
                        PhoneNum: res.permission.mobileNum,
                        Address: res.permission.address
                    })
                })
            } else {
                this.props.history.replace('/');
            }
            
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

                            <form onSubmit={this.handleUpload}>
                                <div className="thaydoi">
                                    <label htmlFor="file1" className="file_labels">
                                        <i className="fa fa-upload" aria-hidden="true"></i>
                                        Chọn ảnh
                                    </label>
                                    <input onChange={(e) => this.handleFile(e)} name="avatar" id='file1' type="file"/>
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
                                    <label htmlFor="file2" className="file_labels">
                                        <i className="fa fa-upload" aria-hidden="true"></i>
                                        Chọn ảnh
                                    </label>
                                    <input id='file2' type="file" />
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
                                    <label htmlFor="file3" className="file_labels">
                                        <i className="fa fa-upload" aria-hidden="true"></i>
                                        Chọn ảnh
                                    </label>
                                    <input id='file3' type="file" />
                                </div>

                                <button className="btn btn-warning btn-block">Thay đổi <i className="fa fa-check"></i></button>
                            </form>
                            
                        </div>
                    </div>

                    <div className="col-md-12 mb-5">
                        <form  onSubmit={this.handleFormSubmit} id="survey-form">
                            <h3 className="title mb-4 text-center"> Chỉnh Sửa Thông Tin Của Bạn </h3>

                            <div className="form-group">
                                <label>Họ Tên</label>
                                <input defaultValue={this.state.Name} onChange={(event) => {this.onHandleChange(event)}} name="Name" className="form-control text-danger" type="text"  placeholder="Họ tên" />
                            </div>

                            <div className="form-group">
                                <label>Số Điện Thoại</label>
                                <input defaultValue={this.state.PhoneNum} onChange={(event) => {this.onHandleChange(event)}} name="PhoneNum" className="form-control text-danger" type="text"  placeholder="Số điện thoại" />
                            </div>

                            <div className="form-group">
                                <label>Địa Chỉ</label>
                                <input defaultValue={this.state.Address} onChange={(event) => {this.onHandleChange(event)}} name="Address" className="form-control text-danger" type="text"  placeholder="Địa chỉ" />
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
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/info_user/info.css';
export default class Edit_Info extends Component {

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
                    <div className="col">
                        <form id="survey-form">
                            <h5 className="title"> Chỉnh Sửa Thông Tin Của Bạn </h5>

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
                        <div className="form-hinhanh">
                            <h5 className="title">Thay đổi hình ảnh</h5>

                            <form>
                                <a style={{float: 'left'}} className="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                    <img width={100} className="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                </a>
                                <p>Chân dung</p>
                                <button className="btn btn-success pull-right thay-doi">Thay đổi</button>
                                <div className="form-group d-flex my-2">
                                    <input className="form-control" type="file" id="" placeholder="Nhập lại mật khẩu" />                                
                                </div>
                            </form>
                             

                            <form>
                                <a style={{float: 'left'}} className="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                    <img width={100} className="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                </a>
                                <p>Biển số</p>
                                <button className="btn btn-success pull-right thay-doi">Thay đổi</button>
                                <div className="form-group d-flex my-2">
                                    <input className="form-control" type="file" id="" placeholder="Nhập lại mật khẩu" />                                
                                </div>
                            </form>

                            <form>
                                <a style={{float: 'left'}} className="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                    <img width={100} className="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                </a>
                                <p>Hình xe</p>
                                <button className="btn btn-success pull-right thay-doi">Thay đổi</button>
                                <div className="form-group d-flex my-2">
                                    <input className="form-control" type="file" id="" placeholder="Nhập lại mật khẩu" />                                
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        );
    }
}
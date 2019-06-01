import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/info_user/info.css';
import '../css/lightBox/lightbox.css';
import '../js/lightbox-plus-jquery';

class Info extends Component {
    render() {
        return (

            <div className="info-user">
                <div className="info-title">
                    <h3>Thông tin cá nhân</h3>
                    <div className="gach"></div>
                </div>
                <div className="info-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <table className="table table-striped table-inverse">
                                    <thead>
                                        <tr>
                                            <th>Họ Tên</th>
                                            <th>Số Điện Thoại</th>
                                            <th>Địa Chỉ</th>
                                            <th className="text-center">Thông Tin Xe</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Trần Phạm Hoàng Nam</td>
                                                <td>0123 456 789</td>
                                                <td>227 Nguyễn Văn Cừ, Q5</td>
                                                <td className="text-center">
                                                    <a style={{margin: '0 10px'}} className="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                                        <img width={130} className="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                                    </a>
                                                    <a style={{margin: '0 10px'}} className="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                                        <img width={130} className="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                                    </a>
                                                    <a style={{margin: '0 10px'}} className="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                                        <img width={130} className="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                </table>
                                <NavLink to="/info/edit_info" className="btn btn-danger pull-right mr-4" id="submit">
                                    <i className="fa fa-arrow-right"></i> Sửa Thông Tin
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Info;
import React, { Component } from 'react';

import axios  from 'axios';

const getListDrive = () =>  axios.get('/account/api').then((res) => res.data);
const activeDrive = (active) => axios.post('/account/api/active', {active}).then((res) => res.data);

class ListDriver extends Component {

    constructor(props) {
        super(props)
        this.state = {
            datas: null,
            Name: "",
            Phone: "",
            Address: "",
            Password: "",
            MotoImage: "",
            LicenseImage: "",
            Avatar: "",
            Active: ""
        }
    }
    
    // ! lấy dữ liệu xuống trước khi render
    componentWillMount() {
        if(this.state.datas === null){
            getListDrive().then((res) => { this.setState({ datas: res })})
        }
    }
    

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-5 text-center">DANH SÁCH THÔNG TIN TÀI XẾ</h1>
                    <hr className="my-2" />
                </div>
                
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <table className="table table-borderless table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                            <th>Họ Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Địa Chỉ</th>
                            <th>Mật Khẩu</th>
                            <th>Thông Tin Xe</th>
                            <th>Trạng Thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Trần Phạm Hoàng Nam</td>
                            <td>0123 345 566</td>
                            <td>227 Nguyễn Văn Cừ, Q5</td>
                            <td>DJKSYFFGFW</td>
                            <td>
                                <a classname="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                <img width={50} classname="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                </a>
                                <a classname="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                <img width={50} classname="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                </a>
                                <a classname="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                <img width={50} classname="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                </a>
                            </td>
                            <td>
                                <button className="btn btn-success">Kích Hoạt</button>
                            </td>
                            </tr>
                            <tr>
                            <td>Trần Phạm Hoàng Nam</td>
                            <td>0123 345 566</td>
                            <td>227 Nguyễn Văn Cừ, Q5</td>
                            <td>DJKSYFFGFW</td>
                            <td>
                                <a classname="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                <img width={50} classname="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                </a>
                                <a classname="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                <img width={50} classname="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                </a>
                                <a classname="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                <img width={50} classname="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                </a>
                            </td>
                            <td>
                                <button className="btn btn-success">Kích Hoạt</button>
                            </td>
                            </tr>
                            <tr>
                            <td>Trần Phạm Hoàng Nam</td>
                            <td>0123 345 566</td>
                            <td>227 Nguyễn Văn Cừ, Q5</td>
                            <td>DJKSYFFGFW</td>
                            <td>
                                <a classname="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                <img width={50} classname="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                </a>
                                <a classname="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                <img width={50} classname="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                </a>
                                <a classname="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                                <img width={50} classname="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                                </a>
                            </td>
                            <td>
                                <button className="btn btn-success">Kích Hoạt</button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default ListDriver;
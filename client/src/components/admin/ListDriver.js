/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import AuthService from '../AuthService';
import axios  from 'axios';
import Driver from './Driver';

const getListDrive = () =>  axios.get('/account/api').then((res) => res.data).catch((err) => err);
// const activeDrive = (active) => axios.post('/account/api/active', {active}).then((res) => res.data);

class ListDriver extends Component {

    constructor(props) {
        super(props)
        this.Auth = new AuthService();
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
        if(!this.Auth.loggedIn()){
            this.props.history.replace('/login');
        } else {

            const Auths = new AuthService();
            const profile = Auths.getProfile();
            
            const UserActive = profile.user;
            
            if(UserActive === '0123456789'){
                getListDrive().then((res) => {
                    this.setState({
                        datas: res
                    })
                })
            } else {
                this.props.history.replace('/');
            }
            
        }
    }

    printData = () => {
        if(this.state.datas !== null){
            return this.state.datas.map((value, key) =>{
                return (
                    <Driver
                        key={key}
                        id={key}
                        drive={value._id}
                        drive_name={value.permission.name}
                        drive_phone={value.permission.mobileNum}
                        drive_address={value.permission.address}
                        drive_active={value.active}
                    ></Driver>        
                )
            })
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
                            <th>Thông Tin Xe</th>
                            <th>Trạng Thái</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.printData()}

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
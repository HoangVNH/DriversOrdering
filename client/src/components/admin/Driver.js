import React, { Component } from 'react';

import axios  from 'axios';
const changeActive = (id, status) =>  axios.post('/account/api/getaccount/drive', {id, status}).then((res) => res.data).catch((err) => err);

class Driver extends Component {

    constructor(props) {
        super(props)
        this.state = {
            datas: null,
            MotoImage: "",
            LicenseImage: "",
            Avatar: "",
            Active: ""
        }
    }

    activeDrive = () =>{
        var idUser = this.props.drive;
        var statusUser = this.props.drive_active;

        changeActive(idUser, statusUser).then((res) => {
            this.setState({
                Active: res.active
            })
            console.log(this.state.Active);
            
            
        })
    }

    checkActive = () => {
        
        if(this.state.Active === false ){
            return (
                <button onClick={() => this.activeDrive()} className="btn btn-success btn-block">Kích Hoạt</button>
            )
        } else {
            return (
                <button onClick={() => this.activeDrive()} className="btn btn-danger btn-block">Khóa</button>
            )
        }
    }

    ganState = () => {
        const id = this.props.drive;
        const tt = this.props.drive_active;
        changeActive(id, tt).then((res) => {
            this.setState({
                Active: res.active
            }) 
            
        })
        // this.setState({
        //     Active: this.props.drive_active
        // })
    }
    
    componentWillMount() {
        this.ganState();
    }

    render() {
        return (
            <tr>
                <td> {this.props.drive_name} </td>
                <td> {this.props.drive_phone} </td>
                <td> {this.props.drive_address} </td>
                <td>
                    <a className="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                        <img width={50} className="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                    </a>
                    <a className="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                        <img width={50} className="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                    </a>
                    <a className="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1">
                        <img width={50} className="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="anh22" />
                    </a>
                </td>
                <td>
                    { this.checkActive() }
                </td>
            </tr>
        );
    }
}

export default Driver;
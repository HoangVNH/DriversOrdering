import React, { Component } from 'react';

class Driver extends Component {

    checkActive = () => {
        if(this.props.drive_active === false ){
            return (
                <button className="btn btn-success btn-block">Kích Hoạt</button>
            )
        } else {
            return (
                <button className="btn btn-danger btn-block">Khóa</button>
            )
        }
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
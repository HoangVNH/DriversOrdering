/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { PureComponent } from 'react';
import '../css/not_found_about/about.css';

import Avart1 from '../images/tphn.jpg';
import Avart2 from '../images/vnhh.jpg';
import Avart3 from '../images/cct.jpg';
export default class About extends PureComponent {

    render() {
        return (
            <div className="about-team">
                <h1 className="text-center">BIẾT HƠN VỀ CHÚNG TÔI</h1>
                <div className="container">
                               
                    <div className="member-items">
                        <div className="members">
                            <div className="img-menbers">
                                <img className="" src={Avart1} alt="anh1" />
                            </div>
                            <div className="content-member">
                                <h5 className="text-center">Trần Phạm Hoàng Nam</h5>
                                <p className="card-text text-center">MSSV - 1660359</p>
                                <div className="social">
                                    <i className="fa fa-facebook" />
                                    <i className="fa fa-twitter" />
                                    <i className="fa fa-pinterest-p" />
                                    <i className="fa fa-linkedin" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="member-items">
                        <div className="members">
                            <div className="img-menbers">
                                <img className="" src={Avart2} alt="anh2" />
                            </div>
                            <div className="content-member">
                                <h5 className="text-center">Vũ Nguyễn Huy Hoàng</h5>
                                <p className="card-text text-center">MSSV - 1660214</p>
                                <div className="social">
                                    <i className="fa fa-facebook" />
                                    <i className="fa fa-twitter" />
                                    <i className="fa fa-pinterest-p" />
                                    <i className="fa fa-linkedin" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="member-items">
                        <div className="members">
                            <div className="img-menbers">
                                <img className="" src={Avart3} alt="anh3" />
                            </div>
                            <div className="content-member">
                                <h5 className="text-center">Hồ Kiếm Hùng</h5>
                                <p className="card-text text-center">MSSV - 1660227</p>
                                <div className="social">
                                    <i className="fa fa-facebook" />
                                    <i className="fa fa-twitter" />
                                    <i className="fa fa-pinterest-p" />
                                    <i className="fa fa-linkedin" />
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}
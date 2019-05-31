/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { PureComponent } from 'react';
import '../css/not_found_about/about.css';

import Avart1 from '../images/avatar_1.jpg';
export default class About extends PureComponent {

    render() {
        return (
            <div className="about-team">
                <h1 className="about-team-title">BIẾT HƠN VỀ CHÚNG TÔI</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card about-img">
                                <div className="imgs">
                                    <img className="card-img-top" src={Avart1} alt="anh1" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Trần Phạm Hoàng Nam</h5>
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

                         <div className="col-md-4">
                            <div className="card about-img">
                                <div className="imgs">
                                    <div className="nenxam"></div>
                                    <img className="card-img-top" src={Avart1} alt="anh1" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Trần Phạm Hoàng Nam</h5>
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

                         <div className="col-md-4">
                            <div className="card about-img">
                                <div className="imgs">
                                    <div className="nenxam"></div>
                                    <img className="card-img-top" src={Avart1} alt="anh1" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Trần Phạm Hoàng Nam</h5>
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
                    </div>
                </div>
            </div>

        );
    }
}
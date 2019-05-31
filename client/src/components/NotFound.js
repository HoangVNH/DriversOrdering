/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/not_found_about/notfound.css';
export default class About extends PureComponent {

    render() {
        return (
           <div className="found">
                <section className="error-container">
                    <h1>TRANG BẠN TÌM THẤY KHÔNG KHẢ DỤNG</h1>
                    <span>4</span>
                    <span><span className="screen-reader-text">0</span></span>
                    <span>4</span>
                </section>
                <div className="link-container">
                    <NavLink to="/" className="more-link">Trở Về Trang Chủ</NavLink>
                </div>
           </div>
        );
    }
}
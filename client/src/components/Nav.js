import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <NavLink to="/">
                        <li className="cli"> 
                            <i className="fa fa-user-circle-o"></i>
                            Thông Tin Cá Nhân
                        </li>
                    </NavLink>

                    <NavLink to="/login">
                        <li className="cli"> 
                            <i className="fa fa-sign-in"></i>
                            Đăng Nhập
                        </li>
                    </NavLink>

                    <NavLink to="/about">
                        <li className="cli"> 
                            <i className="fa fa-info-circle"></i>
                            Thông Tin Liên Hệ
                        </li>
                    </NavLink>
                </ul>
            </nav>

        )
    }
}

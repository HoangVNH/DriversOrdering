import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class nav extends Component {
    render() {
        return (
            <div className="">
                <nav>

                    <ul>
                        <NavLink to="/">
                            <li> 
                                <i className="fa fa-user-circle-o"></i>
                                Thông Tin Cá Nhân
                            </li>
                        </NavLink>

                        <NavLink to="/login">
                            <li> 
                                <i className="fa fa-sign-in"></i>
                                Đăng Nhập
                            </li>
                        </NavLink>

                        <a href="#/">
                            <li> 
                                <i className="fa fa-edit"></i>
                                Painel de controle
                            </li>
                        </a>
                    </ul>
                </nav>
            </div>

        )
    }
}

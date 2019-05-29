import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <div className="header">
                <div className="menu-box">
                    <div className="menu-btn">
                        <span className="menu-bar menu-bar-top" />
                        <span className="menu-bar menu-bar-middle" />
                        <span className="menu-bar menu-bar-bottom" />
                    </div>
                    <span className="logo">Mr.Xe Ômmm</span>
                </div>

                <div className="header-user">
                    <div className="users" href="#/">
                        
                        <div className="dropdown user-name">
                            <a className="dropdown-toggle" href="#/" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Valerie Luna
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#/">Thông Tin</a>
                                <a className="dropdown-item" href="#/">Đăng Xuất</a>
                            </div>
                        </div>

                        <div className="users-image"> 
                            <img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="hinh"/>
                        </div>

                    </div >
                </div>
            </div>
        )
    }
}

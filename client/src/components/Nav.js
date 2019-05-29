import React, { Component } from 'react'

export default class nav extends Component {
    render() {
        return (
            <div className="">
                <nav>
                    <div className="header">

                        <div className="users-image"> 
                            <img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="hinh" />
                        </div>
                        <div className="users"> 
                            <p>Valerie Luna</p>
                        </div>

                    </div>

                    <ul>
                        <a href="#/">
                            <li> 
                                <i className="fa fa-edit"></i>
                                Painel de controle
                            </li>
                        </a>

                        <a href="#/">
                            <li> 
                                <i className="fa fa-edit"></i>
                                Painel de controle
                            </li>
                        </a>

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

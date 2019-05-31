import React, { Component } from 'react';
import { Route } from 'react-router'

import Map from '../components/Map';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Forget_pass from '../components/Forget_pass';

class Urls extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Map} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/forget_pass" exact component={Forget_pass} />
            </div>
        );
    }
}

export default Urls;
